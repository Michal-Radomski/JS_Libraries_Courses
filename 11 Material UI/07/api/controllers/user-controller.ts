import { Request, RequestHandler, Response } from "express";
import { compareSync, hashSync } from "bcrypt";

import User, { UserI } from "../models/User";

export const getAllUsers: RequestHandler = async (req: Request, res: Response): Promise<any> => {
  console.log("req.ip:", req.ip);

  let users: UserI[];
  try {
    users = (await User.find()) as UserI[];
  } catch (err) {
    return console.log({ err });
  }

  if (!users) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  return res.status(200).json({ users });
};

export const getUserById: RequestHandler = async (req: Request, res: Response): Promise<any> => {
  const id: string = req.params.id;

  let user: UserI;
  try {
    user = (await User.findById(id).populate("posts")) as UserI;
  } catch (err) {
    return console.log({ err });
  }
  if (!user) {
    return res.status(404).json({ message: "No user found" });
  }

  return res.status(200).json({ user });
};

export const signup = async (req: Request, res: Response): Promise<any> => {
  const { name, email, password } = req.body;

  if (!name && name.trim() === "" && !email && email.trim() === "" && !password && password.length <= 6) {
    return res.status(422).json({ message: "Invalid Data" });
  }

  const hashedPassword: string = hashSync(password, 12);

  let user: UserI;
  try {
    user = new User({ email, name, password: hashedPassword }) as UserI;
    await user.save();
  } catch (err) {
    return console.log(err);
  }

  if (!user) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  return res.status(201).json({ user });
};

export const login: RequestHandler = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  if (!email || email.trim() === "" || !password || password.length < 6) {
    return res.status(422).json({ message: "Invalid Data" });
  }

  let existingUser: UserI;
  try {
    existingUser = (await User.findOne({ email })) as UserI;
  } catch (err) {
    return console.log({ err });
  }

  if (!existingUser) {
    return res.status(404).json({ message: "No user found" });
  }
  const isPasswordCorrect: boolean = compareSync(password, existingUser.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }

  return res.status(200).json({ id: existingUser._id, message: "Login Successful" });
};
