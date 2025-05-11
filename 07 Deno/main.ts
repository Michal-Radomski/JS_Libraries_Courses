//* deno run --allow-net main.ts
//* nodemon --watch src --signal SIGHUP --exec deno run --allow-all --unstable --inspect main.ts (nodemon instead of denon)!

import { Application } from "https://deno.land/x/oak/mod.ts";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

import router from "./src/routes.ts";

const env = await load();
// console.log("env:", env);

const port = env["PORT"];
Deno.env.set("port", "port");
// console.log({ port });

const app = new Application();
// console.log("app:", app);

// app.use((ctx, next) => {
//   console.log("ctx:", ctx)
//   ctx.response.body = "Hello Deno";
//   next();
// });

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });
