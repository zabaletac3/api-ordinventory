import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import { check, body, validationResult } from "express-validator"

export const loginRouter = Router()

loginRouter.route('/login')
    .post([
        check('username').not().isEmpty(),
        check('contrasena').not().isEmpty()
    ],loginController.login);