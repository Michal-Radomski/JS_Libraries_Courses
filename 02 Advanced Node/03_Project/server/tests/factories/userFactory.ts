import mongoose from "mongoose";

const User = mongoose.model("User");
console.log("User:", User);

export const userFactory = () => {
  return new User({}).save();
};
