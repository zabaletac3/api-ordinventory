import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../models/user.entity';
import { Employees } from '../models/employees.entity';
import * as bcrypt from 'bcrypt';
import { updateImportEqualsDeclaration, updateShorthandPropertyAssignment } from 'typescript';
import { resolve } from 'path';
import { generarJWT } from '../helpers/generar.jwt';

const userRepository: Repository<User> = AppDataSource.getRepository(User);


export const loginController = {


    login: async (req: Request, res: Response) => {

        const { username, contrasena} = req.body

        try {
        
            // Validar si existe el usuario
            const userUsername = req.params.username;
            const usuario = await userRepository.findOneBy({ username });
            if ( !usuario ) {
                return res.status(400).json({
                    ok: false,
                    message: 'Usuario y/o contrasena no son validos'
                });
            }


        //validar contraseña
        const validPass = bcrypt.compareSync(contrasena, usuario.contrasena);
        if ( !validPass ) {
            return res.status(400).json({
                ok: false,
                message: 'Usuario y/o contrasena no son validos'
            });
        }

        // Generar JWT
        const token = await generarJWT( usuario.username);
            res.json({
                usuario,
                token,
                message: 'Login OK'
            })





        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: ' Error en comunicación '
            });
        }
    }

    
    

}


