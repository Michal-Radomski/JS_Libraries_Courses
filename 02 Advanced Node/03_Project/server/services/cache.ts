import mongoose from "mongoose";

const exec = mongoose.Query.prototype.exec;
// console.log({ exec });

mongoose.Query.prototype.exec = function () {
  // console.log("I'm about to run a query");
  // console.log(this.getQuery());
  // @ts-ignore
  // console.log(this.mongooseCollection.name);

  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      // @ts-ignore
      collection: this.mongooseCollection.name,
    })
  );
  console.log("key:", key);

  return exec.apply(this, arguments as any);
};
