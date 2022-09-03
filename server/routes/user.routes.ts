import { Router } from "express";
import { userController } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.route('/users')
    .get(userController.findAll)
    .post(userController.create);

userRouter.route('/users/:id')
    .get(userController.findById)
    .put(userController.updateById)
    .delete(userController.deleteById);
