import { ObjectId } from "https://deno.land/x/mongo@v0.33.0/mod.ts";

import db from "./DB.ts";
import { TaskSchema } from "./Task.ts";

const tasks = db.collection<TaskSchema>("tasks");

export const createTask = async ({ request, response }: { request: Request; response: Response }): Promise<void> => {
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

export const getTasks = async ({ request, response }: { request: Request; response: Response }): Promise<void> => {
  console.log("request.ip:", request.ip);

  const allTasks = await tasks.find({}).toArray();
  response.status = 200;
  response.body = { tasks: allTasks };
  return;
};

export const getTaskById = async ({
  params,
  response,
}: {
  params: { taskId: string };
  response: Response;
}): Promise<void> => {
  // console.log("params:", params);

  const taskId = params.taskId;
  // console.log({ taskId });

  const task = await tasks.findOne({ _id: new ObjectId(taskId) });

  if (!task) {
    response.status = 404;
    response.body = { message: `No task with this id: ${taskId}` };
    return;
  }

  response.status = 200;
  response.body = { task: task };
  return;
};

export const updateTaskById = async ({
  params,
  request,
  response,
}: {
  params: { taskId: string };
  request: Request;
  response: Response;
}): Promise<void> => {
  const taskId = params.taskId;
  // console.log({ taskId });

  const reqBody = await request.body.json();
  // console.log(reqBody, typeof reqBody);

  const { name, isCompleted } = reqBody;
  // console.log({ name, isCompleted });

  const task = await tasks.updateOne({ _id: new ObjectId(taskId) }, { $set: { name: name, isCompleted: isCompleted } });
  // console.log({ task });

  response.status = 200;
  response.body = { message: "Task updated successfully updated", task };
  return;
};
