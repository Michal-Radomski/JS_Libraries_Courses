import { Router } from "https://deno.land/x/oak/mod.ts";

import { signUp, signIn } from "./users.ts";

const router = new Router();

// User Routes
router.post("/api/signup", signUp);

router.post("/api/signin", signIn);

export default router;
