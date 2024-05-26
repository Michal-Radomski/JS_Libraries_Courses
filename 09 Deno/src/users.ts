import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import { create } from "https://deno.land/x/djwt@v2.8/mod.ts";

import db from "./DB.ts";
import { UserSchema } from "./User.ts";
import { key } from "./key.ts";
// console.log("key:", key);

const Users = db.collection<UserSchema>("users");

export const signUp = async (ctx: Context): Promise<void> => {
  const reqBody = await ctx.request.body.json();
  // console.log(reqBody, typeof reqBody);

  const { username, password } = reqBody;
  // console.log({username, password})

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const _id = await Users.insertOne({ username, hashPassword });
  // console.log({_id})

  ctx.response.status = 201;
  ctx.response.body = { message: "User is successfully registered:", userId: _id, username, password };
};

export const signIn = async ({ request, response }: { request: Request; response: Response }): Promise<void> => {
  const reqBody = await request.body.json();
  // console.log(reqBody, typeof reqBody);

  const { username, password } = reqBody;
  // console.log({ username, password });

  const user = await Users.findOne({ username });
  // console.log({ user });

  if (!user) {
    response.status = 404;
    response.body = { message: "User not found" };
    return;
  }
  const confirmPassword = await bcrypt.compare(password, user.hashPassword);
  // console.log({ confirmPassword });

  if (!confirmPassword) {
    response.status = 404;
    response.body = { message: "Bad credentials" };
    return;
  }

  // Authenticate user
  const payload = { id: user._id, name: username };

  const jwt = await create({ alg: "HS512", type: "JWT" }, { payload }, key);

  if (jwt) {
    response.status = 200;
    response.body = { userId: user._id, username, token: jwt };
    return;
  } else {
    response.status = 500;
    response.body = { message: "Internal server error" };
    return;
  }
};
