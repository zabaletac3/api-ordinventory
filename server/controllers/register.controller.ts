import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../models/user.entity';
import { Employees } from '../models/employees.entity';
import * as bcrypt from 'bcrypt';
import { generarJWT } from '../helpers/generar.jwt';



const userRepository: Repository<User> = AppDataSource.getRepository(User);

const employeesRepository: Repository<Employees> = AppDataSource.getRepository(Employees);



export const registerController = {

    create: async (req: Request, res: Response) => {

        const foundEmployee = await employeesRepository.findOneBy({ id: req.body.identificacion });
        if (!foundEmployee)
            return res.json({
                ok: false,
                message: 'Solo se permiten registrar usuarios existentes en el sistema'
            });

        const usuario = {
            username: req.body.username,
            identificacion: foundEmployee,
            contrasena: bcrypt.hashSync(req.body.contrasena, 10),
            role: req.body.role
        }
        console.log(bcrypt.hashSync(req.body.contrasena, 10));

        try {
            const crearUsuario = await userRepository.save(usuario);
            const token = await generarJWT( usuario.username);
            return res.json({
                ok: true,
                data: {
                    usuario: crearUsuario,
                    token
                },
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


