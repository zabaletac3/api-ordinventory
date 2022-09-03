import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Products } from '../models/products.entity';

const productRepository: Repository<Products> = AppDataSource.getRepository(Products);

export const productsController = {
    

    /**
     * Listar todos los productos
     * @param req 
     * @param res 
     */
    findAll: async (req: Request, res: Response) => {
        const productList = await productRepository.find();
        res.json({
            ok: true,
            data: productList
        });
    },
    
    /**
     * Crear un producto
     * @param req 
     * @param res 
     */
    create: async (req: Request, res: Response) => {
        const crearProducto = await productRepository.insert(req.body);
        res.json({
            ok: true,
            data: crearProducto
        })
    },

    /**
     * Buscar un producto por su código
     * @param req 
     * @param res 
     */
    findById: async (req: Request, res: Response) => {
        const productCod = +req.params.cod;
        const foundProduct = await productRepository.findOneBy({ cod: productCod })
        if (foundProduct == null){
            return res.json({
                ok: false,
                data: `Producto con cod: ${productCod} no existe en el sistema`
            });
        }
        return res.json({
            ok: true,
            data: foundProduct
        });
    },

    
    /**
     * Actualizar un producto por su código
     * @param req 
     * @param res 
     * @returns 
     */
    updateById: async (req: Request, res: Response) => {
        const productCod = +req.params.cod;
        const {nom_producto, precio, existencia } = req.body;
        const foundProduct = await productRepository.findOneBy({ cod: productCod });
        if (!foundProduct) {
            return res.json ({
                ok: false,
                data: `Producto con cod: ${productCod} no existe en el sistema`
            });
        }
        if(nom_producto) foundProduct!.nom_producto = nom_producto;
        if(precio) foundProduct!.precio = precio;
        if(existencia) foundProduct!.existencia = existencia;
        const updateProduct = await productRepository.update(productCod, foundProduct!)
        return res.json({
            ok: true,
            message: 'Producto actualizado',
            data: updateProduct
        });
    },


    /**
     * Borrar un producto por su código
     * @param req 
     * @param res 
     * @returns 
     */
    deleteById: async (req: Request, res: Response) => {
        const productCod = +req.params.cod;
        const foundProduct = await productRepository.findOneBy({ cod: productCod});
        if(!foundProduct) {
            return res.json({
                ok: false,
                data: `Producto con cod: ${productCod} no existe en el sistema`
            })
        }
        const deleteProduct = await productRepository.delete(productCod);
        res.json({
            ok: true,
            data: deleteProduct,
            message: 'Producto eliminado correctamente'
        })
    }




}