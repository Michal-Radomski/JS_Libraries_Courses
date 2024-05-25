import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

import db from "./DB.ts"
import {UserSchema} from "./User.ts"

const Users = db.collection<UserSchema>("users")

export const signUp = async(ctx:Context) => {

  const reqBody = await ctx.request.body.json()
  // console.log(reqBody, typeof reqBody);
  
  const {username, password} = reqBody
  // console.log({username, password})

const salt = await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash(password, salt)

  const _id = await Users.insertOne({username, hashPassword})
  // console.log({_id})

  ctx.response.status = 201;
  ctx.response.body={message: "User is successfully registered:", userId: _id, username, password}
}
