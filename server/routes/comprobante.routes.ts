import { Router } from "express";
import { comprobanteController } from "../controllers/comprobante.controller";

export const comprobanteRouter = Router()

comprobanteRouter.route('/comprobante')
    .post(comprobanteController.comprobante)
    .get(comprobanteController.findAll);