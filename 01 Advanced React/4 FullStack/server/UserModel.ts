import mongoose, { Schema, Document } from "mongoose";

export interface IModel extends Document {
  email: string;
  password: string;
}

const UserSchema: Schema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: [8, "Min password length is 8 characters"] },
  },
  { timestamps: true }
);

export default mongoose.model<IModel>("User", UserSchema);
