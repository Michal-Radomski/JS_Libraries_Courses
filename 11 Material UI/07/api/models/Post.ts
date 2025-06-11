import mongoose, { models, Schema, Document } from "mongoose";

import { UserI } from "./User";

export interface PostI extends Document {
  title: string;
  description: string;
  image: string;
  location: string;
  date: Date;
  user: UserI;
}

const postSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Post = models?.Post || mongoose.model<PostI>("User", postSchema);

export default Post;
