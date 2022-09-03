import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../models/user.entity';
import { Employees } from '../models/employees.entity';
import * as bcrypt from 'bcrypt';



const userRepository: Repository<User> = AppDataSource.getRepository(User);

const employeesRepository: Repository<Employees> = AppDataSource.getRepository(Employees);



export const registerController = {

    create: async (req: Request, res: Response) => {

        const usuario = {
            username: req.body.username,
            identificacion: req.body.identificacion,
            contrasena: await bcrypt.hash(req.body.contrasena, 10),
            role: req.body.role
        }

        const foundEmployee = employeesRepository.findOneBy({ id: usuario.identificacion });
        if (!foundEmployee)
            return res.json({
                ok: false,
                message: 'Solo se permiten registrar usuarios existentes en el sistema'
            });

        try {
            const crearUsuario = await userRepository.insert(usuario);
            return res.json({
                ok: true,
                data: crearUsuario,
                message: `Usuario creado correctamente`
            });
        } catch (error: any) {
            if(error.code == 'ER_DUP_ENTRY') 
            return res.json({
                ok: false,
                message: 'Ya existe un usuario con esa identificación'
            });
        }

    },

}


