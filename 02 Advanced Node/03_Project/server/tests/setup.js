import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

// import User from "../models/User";
require("../models/User");
const keys = require("../config/keys");

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((error) => console.log("Mongo DB Error => ", error));

afterAll(async () => {
  await mongoose.disconnect();
});
