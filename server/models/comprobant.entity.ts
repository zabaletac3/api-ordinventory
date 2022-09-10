import { json } from 'body-parser';
import {Any, Code, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp} from 'typeorm'
import { PreProcessedFileInfo } from 'typescript';
import { runInThisContext } from 'vm';
import { productsController } from '../controllers/products.controller';
import { DetalleComprobante } from './detalle.comprobante.entity';
import { Products } from './products.entity';
import { User } from './user.entity';


@Entity ({
    name: 'comprobante'
})
export class Comprobante {

    @PrimaryGeneratedColumn({
        name: 'id_comprobante'
    })
    id_comprobante: number;

    @CreateDateColumn()
    fecha: Date


    @ManyToOne( () => User, (user: User) => user.comprobante )
    @JoinColumn({name: 'usuario'})
    User!: User

    @OneToMany( () => DetalleComprobante, (detalleComprobante: DetalleComprobante) => detalleComprobante.id_comprobante )
    DetalleComprobante!: DetalleComprobante

    // @OneToOne(() => Products, (producto) => producto.comprobante)
    // @JoinColumn({ name: 'producto' })
    // Products!: Products;

    // @OneToOne( () => Products, (producto: Products) => producto.comprobante )
    // @JoinColumn({name: 'producto'})
    // Products!: Products[]


    constructor (
        id_comprobante: number, fecha: Date
    ){
        this.id_comprobante = id_comprobante;
        this.fecha = fecha
    }

}