import mongoose, { models, Schema, Document } from "mongoose";

import { PostI } from "./Post";

export interface UserI extends Document {
  name: string;
  email: string;
  password: string;
  posts?: PostI[];
}

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    posts: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true, collection: "User" }
);

const User = models?.User || mongoose.model<UserI>("User", userSchema);

export default User;
