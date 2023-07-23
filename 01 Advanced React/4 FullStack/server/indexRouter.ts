import express from "express";

const indexRouter: express.Router = express.Router();

import { signUp } from "./controllers/authentication";

indexRouter.post("/signup", signUp);

export default indexRouter;
