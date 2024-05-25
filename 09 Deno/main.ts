//* deno run --allow-net main.ts

import { Application } from "https://deno.land/x/oak/mod.ts";

import router from "./src/Routes.ts";

const port = 8000;
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
