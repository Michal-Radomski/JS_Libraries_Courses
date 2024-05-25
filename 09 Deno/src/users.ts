import db from "./DB.ts"
import {UserSchema} from "./User.ts"

const Users = db.collection<UserSchema>("users")

export const signUp = async({request, response}:{request:any, response:any}) => {
 

  const body = await request.body(); //Returns { type: "json", value: Promise { <pending> } }
    if (!request.hasBody) {
      response.status = 400;
      response.body = { message: "No data provided" };
      return;
    }
    const values = await body.value;
console.log(values)






  // const {username, password} = await request.body.value
  // console.log({username, password})

  // const _id = await Users.insertOne({username, password})

  // response.status = 201;
  // response.body={message: "User is successfully registered:", userId: _id, username, password}
}
