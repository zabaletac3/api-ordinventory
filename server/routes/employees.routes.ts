import { Router } from "express";
import { employeesController } from "../controllers/employees.controller";

export const employeesRoutes = Router();

employeesRoutes.route('/employees')
    .get(employeesController.findAll)
    .post(employeesController.create);


employeesRoutes.route('/employees/:id')
    .get(employeesController.findById)
    .put(employeesController.updateById)
    .delete(employeesController.deleteById)    