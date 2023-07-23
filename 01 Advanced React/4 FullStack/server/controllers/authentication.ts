import { Request, RequestHandler, Response } from "express";

import { CustomError } from "../Interfaces";

import UserModel, { IModel } from "../UserModel"; //* V1-> Mongoose Model

export const signUp: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  console.log("req.ip:", req.ip);
  try {
    res.send({ success: true, message: "true" });
  } catch (error) {
    console.log({ error });
    res.status(404).json(error);
  }
};
