import { Router } from "https://deno.land/x/oak/mod.ts";

import {signUp} from "./users.ts"

const router = new Router();

// User Routes
router.post("/api/signup", signUp)

export default router;
