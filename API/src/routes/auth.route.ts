import { Router } from "express";
import { getMe } from "../controllers/auth/auth.controller";

const authRouter = Router();
authRouter.get("/me", getMe);

export default authRouter;