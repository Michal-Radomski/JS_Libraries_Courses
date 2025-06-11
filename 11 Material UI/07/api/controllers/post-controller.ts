import { Request, RequestHandler, Response } from "express";
import mongoose, { ClientSession } from "mongoose";

import Post, { PostI } from "../models/Post";
import User, { UserI } from "../models/User";

export const getAllPosts: RequestHandler = async (req: Request, res: Response): Promise<any> => {
  console.log("req.ip:", req.ip);

  let posts: PostI[];
  try {
    posts = (await Post.find().populate("user")) as PostI[];
  } catch (err) {
    return console.log({ err });
  }

  if (!posts) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  return res.status(200).json({ posts });
};
export const addPost: RequestHandler = async (req: Request, res: Response): Promise<any> => {
  const { title, description, location, date, image, user } = req.body;

  if (
    !title ||
    title.trim() === "" ||
    !description ||
    description.trim() === "" ||
    !location ||
    location.trim() === "" ||
    !date ||
    !user ||
    !image ||
    image.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Data" });
  }

  let existingUser: UserI;
  try {
    existingUser = (await User.findById(user)) as UserI;
  } catch (err) {
    return console.log({ err });
  }

  if (!existingUser) {
    return res.status(404).json({ message: "User not found" });
  }

  let post: PostI;

  try {
    post = new Post({
      title,
      description,
      image,
      location,
      date: new Date(`${date}`),
      user,
    }) as PostI;

    const session: ClientSession = await mongoose.startSession();
    session.startTransaction();
    existingUser.posts?.push(post);
    await existingUser.save({ session });
    post = await post.save({ session });
    session.commitTransaction();
  } catch (err) {
    return console.log(err);
  }

  if (!post) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }
  return res.status(201).json({ post });
};

export const getPostById: RequestHandler = async (req: Request, res: Response): Promise<any> => {
  const id: string = req.params.id;

  let post: PostI;

  try {
    post = (await Post.findById(id)) as PostI;
  } catch (err) {
    return console.log({ err });
  }

  if (!post) {
    return res.status(404).json({ message: "No post found" });
  }
  return res.status(200).json({ post });
};

export const updatePost: RequestHandler = async (req: Request, res: Response): Promise<any> => {
  const id: string = req.params.id;
  const { title, description, location, image } = req.body;

  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !image &&
    image.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Data" });
  }

  let post: PostI;
  try {
    post = (await Post.findByIdAndUpdate(id, {
      title,
      description,
      image,
      location,
    })) as PostI;
  } catch (err) {
    return console.log({ err });
  }

  if (!post) {
    return res.status(500).json({ message: "Unable to update" });
  }
  return res.status(200).json({ message: "Updated Successfully" });
};

export const deletePost: RequestHandler = async (req: Request, res: Response): Promise<any> => {
  const id: string = req.params.id;
  let post;

  try {
    const session: ClientSession = await mongoose.startSession();
    session.startTransaction();
    post = await Post.findById(id).populate("user");
    post.user.posts?.pull(post);
    await post.user.save({ session });
    post = (await Post.findByIdAndRemove(id)) as PostI;
    session.commitTransaction();
  } catch (err) {
    return console.log({ err });
  }
  if (!post) {
    return res.status(500).json({ message: "Unable to delete" });
  }

  return res.status(200).json({ message: "Deleted Successfully" });
};
