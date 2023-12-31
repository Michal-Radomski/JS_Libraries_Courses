import http from "http";
import path from "path";
import fs from "fs";

import express, { Express, Request, Response } from "express";

// The server
const app: Express = express();
app.use("/", express.static(path.resolve(__dirname, "../dist")));

// Test route
// app.get("/", (req: Request, res: Response) => {
//   console.log("req.ip:", req.ip);
//   res.send("<h1 style='color:blue;text-align:center'>API is running</h1>");
// });

//* Favicon -> unnecessary - served by index.html!
// app.get("/favicon.ico", (_req: Request, res: Response) => {
//   // console.log("__dirname:", __dirname);
//   res.sendFile(path.join(__dirname, "../dist/favicon.svg"));
// });

// Serving the Page
app.get("/", (req: Request, res: Response) => {
  console.log("req.ip:", req.ip);
  const pathToHtmlFile = path.resolve(__dirname, "../dist/index.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

// Port
const port = (process.env.PORT || 5000) as number;

const server = http.createServer(app);
server.listen({ port: port }, () => {
  console.log(`Server is listening at http://localhost:${port}`);
  // For testing only
  console.log("Current Time:", new Date().toLocaleTimeString());
});
