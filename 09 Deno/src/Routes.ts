import { Router } from "https://deno.land/x/oak/mod.ts";

import { signUp, signIn } from "./users.ts";
import { createTask, getTasks } from "./task.ts";

const router = new Router();

// User Routes
router.post("/api/signup", signUp);

router.post("/api/signin", signIn);

// Task Routes
router.post("/api/tasks", createTask);
router.get("/api/tasks", getTasks);

export default router;
