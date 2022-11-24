import express from "express";
import { userRegistration, userLogin } from "../controller/authController.js";

const authRouter = express.Router();

// PUBLIC ROUTES
authRouter.post("/registration", userRegistration);

authRouter.post("/login", userLogin);

export default authRouter;
