import { ObjectId } from "https://deno.land/x/mongo@v0.33.0/mod.ts";

import db from "./DB.ts";
import { TaskSchema } from "./Task.ts";

const tasks = db.collection<TaskSchema>("tasks");

export const createTask = async ({ request, response }: { request: Request; response: Response }) => {
  const reqBody = await request.body.json();
  // console.log(reqBody, typeof reqBody);

  const { name, isCompleted } = reqBody;
  // console.log({ name, isCompleted });

  const _id = await tasks.insertOne({
    name,
    isCompleted,
  });

  response.status = 201;
  response.body = { message: "Task is Created", id: _id, name, isCompleted };
  return;
};
