import { MongoClient } from "https://deno.land/x/mongo@v0.33.0/mod.ts";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const env = await load();

const dbAuthString = env["dbAuthString"];
// console.log({ dbAuthString });

const client = new MongoClient();

await client.connect(dbAuthString);

console.log("Database is successfully connected");

const db = client.database("Deno");

export default db;
