import { Router } from "express";
import { loginController } from "../controllers/login.controller";

export const loginRouter = Router()

loginRouter.route('/login')
    .post(loginController.login);