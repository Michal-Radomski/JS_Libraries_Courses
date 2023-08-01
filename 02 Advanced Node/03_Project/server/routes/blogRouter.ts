import express, { Request, Response } from "express";
import { Schema } from "mongoose";
import util from "util";

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

blogRouter.get("/api/blogs", requireLogin, async (req: CustomRequest, res: Response): Promise<void> => {
  //* Redis
  const redis = require("redis");
  const redisURL = `redis://:${process.env.RedisSecret}@${process.env.RedisHost}:${process.env.RedisPort}`;
  const client = await redis.createClient(redisURL);
  // console.log("client:", client);

  client.get = util.promisify(client.get);
  // Overwrite existing function
  const cachedBlogs = await client.get(req.user?.id);
  console.log("cachedBlogs:", cachedBlogs);

  // Do we have any cached data in redis?

  // If yes, then respond the request and return

  // If no, we need to respond to request and update our cached to store the data

  const blogs = (await Blog.find({ _user: req.user?.id })) as IBlogModel[];
  res.status(200).send(blogs);
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
