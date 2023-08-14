import express, { Request, Response } from "express";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const keys = require("../config/keys");

const uploadRouter: express.Router = express.Router();

uploadRouter.get("/api/upload", async (req: Request, res: Response) => {
  const client = new S3Client({
    region: process.env.AWS_Region,
    credentials: {
      accessKeyId: keys.AWS_accessKey,
      secretAccessKey: keys.AWS_secretKeyID,
    },
  });

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_Bucket_Name,
    Key: "111",
    ContentType: "image/jpeg",
  });

  const url = await getSignedUrl(client, command, { expiresIn: 3600 });
}) as express.Router;

export default uploadRouter;
