// import path from "path";
import http from "http";

import * as dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import passport from "passport";

// Import config
const keys = require("./config/keys");
// console.log({ keys });

// Import routes
import authRouter from "./routes/authRouter";
import blogRouter from "./routes/blogRouter";

// Passport config
require("./services/passportConfig");

const app: Express = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
  })
);

// Passport
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Route middleware
app.use("", authRouter);
app.use("", blogRouter);

// Mongo DB
mongoose
  .connect(keys.mongoURI as string, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((con: { connection: { host: string } }) => {
    console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
  })
  .catch((error: string) => console.log("Mongo DB Error => ", error));

//* Test route
// app.get("/", (req: Request, res: Response) => {
//   console.log("req.ip:", req.ip);
//   res.send("<h1 style='color:blue;text-align:center'>API is running</h1>");
// }) as express.RequestHandler;

//* Serve static assets in production
// if (["production"].includes(process.env.NODE_ENV as string)) {
//   // Set static folder
//   app.use(express.static("client/build"));

//   app.get("/*", (req: Request, res: Response) => {
//     console.log("req.ip:", req.ip);
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// Port
const port = (process.env.PORT || 5000) as number;

const server = http.createServer(app);
server.listen({ port: port }, () => {
  console.log(`Server is listening at http://localhost:${port}`);
  // For testing only
  console.log("Current Time:", new Date().toLocaleTimeString());
});

//* Generate JWT secret string
// const JWT_Secret = require("crypto").randomBytes(64).toString("hex");
// console.log({ JWT_Secret }, JWT_Secret.length);

//* Redis
// const redis = require("redis");
// // console.log("redis:", redis);

// const client = redis.createClient({
//   url: `redis://:${process.env.RedisSecret}@${process.env.RedisHost}:${process.env.RedisPort}`,
// });
// // console.log({ client });

// client.on("error", (err: Error) => console.log("Redis Client Error:", err));

// const colorValues = {
//   spanish: {
//     red: "rojo",
//     orange: "naranja",
//     blue: "azul",
//   },
//   german: {
//     red: "rot",
//     orange: "orange",
//     blue: "blau",
//   },
// };

// const connectRedis = async () => {
//   await client.connect();

//   // await client.set("key", "value");
//   // const value = await client.get("key");
//   // await console.log({ value });

//   // await client.hSet("german", "red", "rot");
//   // const values = await client.hGetAll("german");
//   // await console.log({ values });
//   // const value2 = await client.hGet("german", "red");
//   // await console.log({ value2 });

//   await client.set("colorValues", JSON.stringify(colorValues));
//   const colorValuesData = await client.get("colorValues");
//   const colorValuesDataParsed = await JSON.parse(colorValuesData);
//   await console.log("colorValuesDataParsed:", colorValuesDataParsed);

//   await client.disconnect();
// };

// connectRedis();
