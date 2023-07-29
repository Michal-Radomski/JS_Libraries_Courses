import http from "http";
import express, { Express, Request, Response } from "express";

// The server
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  console.log("req.ip:", req.ip);
  res.send("Hi there!");
});

const port = 3000;

const server = http.createServer(app);
server.listen({ port: port }, () => {
  console.log(`Server is listening at http://localhost:${port}`);
  // For testing only
  console.log("Current Time:", new Date().toLocaleTimeString());
});
