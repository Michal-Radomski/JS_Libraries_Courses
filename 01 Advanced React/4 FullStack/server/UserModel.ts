import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IModel extends Document {
  email: string;
  password: string;
}

const UserSchema: Schema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: [8, "Min password length is 8 characters"], select: false },
  },
  { timestamps: true }
);

// On Save Hook, encrypt password
UserSchema.pre("save", function (this: IModel, next) {
  // console.log("this:", this);
  const user = this;
  // console.log({ user });
  bcrypt.genSalt(12, function (err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

export default mongoose.model<IModel>("User", UserSchema);
