import express from "express";
import passport from "passport";

//* It is necessary to work!
const passportService = require("./services/passport");
const requireAuth = passport.authenticate("jwt", { session: false });

const indexRouter: express.Router = express.Router();

import { getMessage, signUp } from "./controllers/authentication";

indexRouter.post("/signup", signUp);

indexRouter.get("/", requireAuth, getMessage);

export default indexRouter;
