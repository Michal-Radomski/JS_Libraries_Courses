import mongoose from "mongoose";
import { createClient } from "redis";

//* Redis
const client = createClient({
  url: `redis://:${process.env.RedisSecret}@${process.env.RedisHost}:${process.env.RedisPort}`,
});
// console.log("client:", client);

// await client.connect();
// await client.disconnect();
client.connect();

//- Overwrite existing function - do wee need it???
// client.get = util.promisify(client.get);

const exec = mongoose.Query.prototype.exec;
// console.log({ exec });

mongoose.Query.prototype.exec = async function () {
  client.on("error", (err: Error) => console.log("Redis Client Error:", err));

  // console.log("I'm about to run a query");
  // console.log(this.getQuery());
  // // @ts-ignore
  // console.log(this.mongooseCollection.name);

  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      // @ts-ignore
      collection: this.mongooseCollection.name,
    })
  );
  // console.log("key:", key);

  // See if we have a value for 'key' in redis
  const cacheValue = await client.get(key);
  // If we do, return that
  if (cacheValue) {
    console.log("cacheValue:", cacheValue);
    // const doc = JSON.parse(cacheValue);
    // return Array.isArray(doc) ? doc.map((d) => new this.model(d)) : new this.model(doc);
  }

  // Otherwise, issue the query and store the result in redis
  const result = await exec.apply(this, arguments as any);
  console.log("result:", result);

  return result;
};
