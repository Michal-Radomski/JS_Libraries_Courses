import express, { Request, Response } from "express";
import { Schema } from "mongoose";
import { createClient } from "redis";

import { requireLogin } from "../middlewares/requireLogin";
import Blog, { IBlogModel } from "../models/BlogModel";

const blogRouter: express.Router = express.Router();

interface CustomUser extends Express.User {
  id?: Schema.Types.ObjectId;
}

interface CustomRequest extends Request {
  user?: CustomUser;
}

blogRouter.get("/api/blogs/:id", requireLogin, async (req: CustomRequest, res: Response): Promise<void> => {
  const blog: IBlogModel | null = await Blog.findOne({
    _user: req!.user!.id!,
    _id: req.params.id,
  });
  res.status(200).send(blog);
}) as express.Router;

blogRouter.get("/api/blogs", requireLogin, async (req: CustomRequest, res: Response): Promise<any> => {
  //* Redis
  const client = createClient({
    url: `redis://:${process.env.RedisSecret}@${process.env.RedisHost}:${process.env.RedisPort}`,
  });
  // console.log("client:", client);

  client.on("error", (err: Error) => console.log("Redis Client Error:", err));
  await client.connect();

  //- Overwrite existing function - do wee need it???
  // client.get = util.promisify(client.get);

  //* Do we have any cached data in redis?
  const cachedBlogs = await client.get(String(req.user?.id!));
  // console.log("cachedBlogs:", cachedBlogs);

  // //* Clear Redis
  // client.flushAll();

  // //* If yes, then respond the request and return
  if (cachedBlogs) {
    // console.log("cachedBlogs from Redis:", cachedBlogs);
    return res.status(200).send(JSON.parse(cachedBlogs));
  }

  //* If no, we need to respond to request and update our cached to store the data
  const blogs = await Blog.find({ _user: req.user?.id });
  // console.log("blogs:", blogs);
  const blogsToSet = await JSON.stringify(blogs);
  // console.log("blogsToSet from Mongo:", blogsToSet);
  await client.set(String(req.user?.id), blogsToSet);
  await client.disconnect();
  return res.status(200).send(blogs);
}) as express.Router;

blogRouter.post("/api/blogs", requireLogin, async (req: CustomRequest, res: Response): Promise<void> => {
  const { title, content } = req.body;

  const blog: IBlogModel = new Blog({
    title,
    content,
    _user: req!.user!.id,
  });

  try {
    await blog.save();
    res.status(201).send(blog);
  } catch (err) {
    res.status(400).send(err);
  }
}) as express.Router;

export default blogRouter;
