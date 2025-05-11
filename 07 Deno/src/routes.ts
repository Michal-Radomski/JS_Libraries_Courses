import { Router } from "https://deno.land/x/oak/mod.ts";

import { signUp, signIn } from "./users.ts";
import { createTask, getTasks, getTaskById, updateTaskById, deleteTask } from "./task.ts";
import { authorized } from "./auth.ts";

const router = new Router();

// User Routes
router.post("/api/signup", signUp);

router.post("/api/signin", signIn);

// Task Routes
router.post("/api/tasks", authorized, createTask);

router.get("/api/tasks", authorized, getTasks);

router.get("/api/tasks/:taskId", authorized, getTaskById);

router.put("/api/tasks/:taskId", authorized, updateTaskById);

router.delete("/api/tasks/:taskId", authorized, deleteTask);

export default router;
