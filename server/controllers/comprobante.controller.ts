import { Request, Response } from 'express'
import { Code, Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Comprobante } from '../models/comprobant.entity'
import { Products } from '../models/products.entity';


const productsRepository: Repository<Products> = AppDataSource.getRepository(Products);
const comprobanteRepository: Repository<Comprobante> = AppDataSource.getRepository(Comprobante);

export const comprobanteController = {

    comprobante: async (req: Request, res: Response) => {

        const genComprobante = {
            id_comprobante: req.body.id_comprobante,
            cod: req.body.cod
        }
        
        try {
            const solComprobante = await  comprobanteRepository.insert(genComprobante);
            return res.json({
                ok: true,
                data: solComprobante,
                message: 'Comprobante generado correctamente'
            })
        } catch (error) {
            console.log(error);
        }
        
    },


    findAll: async (req: Request, res: Response) => {
        const comprobanteList = await comprobanteRepository.find();
        return res.json({
            ok: true,
            data: comprobanteList
        });
    },


}