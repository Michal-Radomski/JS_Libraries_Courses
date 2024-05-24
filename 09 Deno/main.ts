//* deno run --allow-net main.ts

import { Application } from "https://deno.land/x/oak/mod.ts";

const port = 8000;
const app = new Application();
// console.log("app:", app);

app.use((ctx, next) => {
  ctx.response.body = "Hello Deno";
  next();
});

app.addEventListener("listen", () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });
