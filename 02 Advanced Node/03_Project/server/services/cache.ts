import mongoose from "mongoose";

const exec = mongoose.Query.prototype.exec;
// console.log({ exec });

mongoose.Query.prototype.exec = function () {
  console.log("I'm about to run a query");
  return exec.apply(this, arguments as any);
};
