import { Request, response, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Employees } from '../models/employees.entity';

const employeesRepository: Repository<Employees> = AppDataSource.getRepository(Employees);

export const employeesController = {



    /**
     *  Listar todos los empleados 
     * @param req 
     * @param res 
     * @returns 
     */
    findAll: async (req: Request, res: Response) => {
        const EmployeesList = await employeesRepository.find();
        return res.json({
            ok: true,
            data: EmployeesList
        });
    },



    create: async (req: Request, res: Response) => {
        let createEmployees = await employeesRepository.insert(req.body);
        return res.json({
            ok: true,
            data: createEmployees
        })

    },

    /**
     * Buscar empleado por id 
     * @param req 
     * @param res 
     * @returns 
     */
    findById: async (req: Request, res: Response) => {
        const employeesId = +req.params.id;
        const foundEmployees = await employeesRepository.findOneBy({ id: employeesId })
        if (foundEmployees == null) {
            return res.json({
                ok: false,
                data: `Empleado con id: ${employeesId} no existe en sistema`
            })
        }
        return res.json({
            ok: true,
            message: foundEmployees
        })
    },


    /**
     * Actualizar empleado por id
     * @param req 
     * @param res 
     * @returns 
     */
    updateById: async (req: Request, res: Response) => {
        const employeesId = +req.params.id;
        const { id, nombre, apellido, telefono, ciudad, email, cargo } = req.body;
        const foundEmployees = await employeesRepository.findOneBy({ id: employeesId })
        if (!foundEmployees) {
            return res.json({
                ok: false,
                data: `Empleado con id: ${employeesId} no existe en sistema`
            })
        }
        if (id) foundEmployees!.id = id;
        if (nombre) foundEmployees!.nombre = nombre;
        if (apellido) foundEmployees!.apellido = apellido;
        if (telefono) foundEmployees!.telefono = telefono;
        if (ciudad) foundEmployees!.ciudad = ciudad;
        if (email) foundEmployees!.email = email;
        if (cargo) foundEmployees!.cargo = cargo;
        const updateEmployees = await employeesRepository.update(employeesId, foundEmployees)
        return res.json({
            ok: true,
            message: 'Empleado actualizado correctamente',
            data: updateEmployees
        })
    },


    /**
     *  Eliminar empleado por id
     * @param req 
     * @param res 
     * @returns 
     */
    deleteById: async (req: Request, res: Response) => {
        const employeesId = +req.params.id;
        const foundEmployees = await employeesRepository.findOneBy({ id: employeesId });
        if (!foundEmployees) {
            return res.json({
                ok: false,
                data: `Empleado con id: ${employeesId} no existe en sistema`
            })
        }
        const deleteEmployed = await employeesRepository.delete(employeesId)
        return res.json({
            ok: true,
            data: deleteEmployed,
            message: 'Empleado eliminado correctamente'

        })
    }

}