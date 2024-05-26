import { verify } from "https://deno.land/x/djwt@v2.8/mod.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

import { key } from "./key.ts";

export const authorized = async (ctx: Context, next: () => Promise<void>): Promise<void> => {
  try {
    const headers: Headers = ctx?.request?.headers;
    // console.log({  headers });
    const auth = headers.get("Authorization");
    // console.log({ auth });

    if (!auth) {
      ctx.response.status = 401;
      ctx.response.body = { message: "Not authorized" };
      return;
    }

    const jwt = auth.split(" ")[1];
    console.log("jwt:", jwt);

    if (!jwt) {
      ctx.response.status = 401;
      ctx.response.body = { message: "Not authorized" };
      return;
    }

    const payload = await verify(jwt, key);
    console.log({ payload });

    if (!payload) {
      throw new Error("Payload not Found");
    } else {
      return await next();
    }
  } catch (error) {
    console.error("error:", error);
    ctx.response.status = 401;
    ctx.response.body = { message: "Not authorized" };
    return;
  }
};
