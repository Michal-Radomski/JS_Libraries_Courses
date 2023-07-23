import { Request, RequestHandler, Response } from "express";

import { CustomError } from "../Interfaces";

import UserModel, { IModel } from "../UserModel"; //* V1-> Mongoose Model

export const signUp: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  console.log("req.ip:", req.ip);
  // console.log("req.body:", req.body);
  const email = req.body.email;
  const password = req.body.password;
  try {
    // res.send({ success: true, message: "true" });
    // See if user with given email exists

    const user: IModel | null = await UserModel.findOne({ email: email });
    console.log("user:", user);
    res.send({ user });

    // If a user exists, return an error
    // If a user does not exist, create and save user record
    // Respond to request: the user was created
  } catch (error) {
    console.log({ error });
    res.status(404).json(error);
  }
};
