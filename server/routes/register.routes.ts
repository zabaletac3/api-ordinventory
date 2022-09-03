import { Router } from "express";
import { registerController } from "../controllers/register.controller";

export const registerRouter = Router()

registerRouter.route('/register')
    .post(registerController.create);