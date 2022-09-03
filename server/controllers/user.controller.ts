import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../models/user.entity';

const userRepository: Repository<User> = AppDataSource.getRepository(User);

export const userController = {

    /**
     * Buscar todos los usuarios
     * @param req 
     * @param res 
     */
    findAll: async (req: Request, res: Response) => {
        const userList = await userRepository.find();
        res.json({
            ok: true,
            data: userList
        });
    },

    /**
     * Crear un nuevo usuario
     * @param req 
     * @param res 
     */
    create: (req: Request, res: Response) => {
        const registrarUsuario = userRepository.create(req.body);
        return res.json({
            ok: true,
            data: registrarUsuario
        });
    },

    /**
     * Buscar usuario por ID
     * @param req 
     * @param res 
     */
    findById: async (req: Request, res: Response) => {
        const userId = +req.params.id;
        const foundUser = await userRepository.findOneBy({ id: userId });
        if (foundUser == null) {
            return res.json({
                ok: false,
                data: `Usuario con id: ${userId} no existe en el sistema`
            });
        }
        return res.json({
            ok: true,
            data: foundUser
        });
    },


    /**
     * Actualizar usuario pos Id
     * @param req 
     * @param res 
     * @returns 
     */
    updateById: async (req: Request, res: Response) => {
        const userId = +req.params.id;
        const { username, identificacion } = req.body;
        const foundUser = await userRepository.findOneBy({ id: userId });
        if (!foundUser) {
            return res.json({
                ok: false,
                data: `Usuario con id: ${userId} no existe en el sistema`
            });
        }
        if (username) foundUser!.username = username;
        if (identificacion) foundUser!.identificacion = identificacion;
        const updatedUser = await userRepository.update(userId, foundUser!);
        return res.json({
            ok: true,
            message: 'Usuario actualizado',
            data: updatedUser
        });
    },


    /**
     * Borrar usuario por Id
     * @param req
     * @param res 
     * @returns 
     */
    deleteById: async (req: Request, res: Response) => {
        const userId = +req.params.id;
        const foundUser = await userRepository.findOneBy({ id: userId });
        if (!foundUser) {
            return res.json({
                ok: false,
                data: `Usuario con id: ${userId} no existe en el sistema`
            });
        }
        const deletedUser = await userRepository.delete(userId);
        res.json({
            ok: true,
            data: deletedUser,
            message: 'Usuario borrado correctamente'
        });
    },

}