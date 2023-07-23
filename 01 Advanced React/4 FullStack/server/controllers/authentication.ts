import { NextFunction, Request, RequestHandler, Response } from "express";

import { CustomError } from "../Interfaces";

import UserModel, { IModel } from "../UserModel"; //* V1-> Mongoose Model

export const signUp: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  console.log("req.ip:", req.ip);
  // console.log("req.body:", req.body);
  const email = req.body.email;
  const password = req.body.password;
  try {
    // res.send({ success: true, message: "true" });
    // See if user with given email exists

    const user: IModel | null = await UserModel.findOne({ email: email }, (err: Error) => {
      if (err) {
        return next(err);
      }
    });
    // console.log("user:", user);
    // res.send({ user });

    // If a user exists, return an error
    if (user) {
      return res.status(422).send({ error: "422, User already exist!" });
    }

    // If a user does not exist, create and save user record
    const newUser = new UserModel({ email, password });
    console.log({ newUser });
    newUser.save((err) => {
      if (err) {
        return next(err);
      }
    });

    // Respond to request: the user was created
    return res.status(201).json({
      message: "201, User registered",
    });
  } catch (error) {
    console.log({ error });
    res.status(404).json(error);
  }
};
