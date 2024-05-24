import { ObjectId } from "https://deno.land/x/mongo@LATEST_VERSION/mod.ts";

interface UserSchema {
  _id: ObjectId;
  username: string;
  password: string;
}

const db = client.database("test");
const users = db.collection<UserSchema>("users");
