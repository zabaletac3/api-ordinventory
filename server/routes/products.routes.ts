import { Router } from "express";
import { productsController } from "../controllers/products.controller";
import { demoMiddleware } from "../middlewares/demoMiddleware.middelware";

export const productsRouter = Router()

productsRouter.route('/products')
    .get(productsController.findAll)
    .post(productsController.create)

productsRouter.route('/products/:cod')    
    .get([demoMiddleware.messageMiddleware], productsController.findById)
    .put([demoMiddleware.messageMiddleware], productsController.updateById)
    .delete(productsController.deleteById);