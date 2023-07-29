import http from "http";
import cluster from "cluster";
import express, { Express, Request, Response } from "express";

// Is the file being executed in master mode?
if (cluster.isMaster) {
  // Cause index.ts to be executed *again* bu in child mode
  cluster.fork();
} else {
  // I'm as child

  // The server
  const app: Express = express();

  function doWork(duration: number) {
    const start = Date.now();
    while (Date.now() - start < duration) {
      //* do nothing
    }
  }

  app.get("/", (req: Request, res: Response) => {
    doWork(5000);
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
}
