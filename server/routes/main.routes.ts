import { Router } from "express";
import { mainController } from "../controllers/main.controller";

export const mainRouter = Router();

mainRouter.route('/main')
    .get(mainController.getMain);
