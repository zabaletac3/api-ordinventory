import {Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import { Products } from './products.entity';


@Entity ({
    name: 'comprobante'
})
export class Comprobante {

    @PrimaryGeneratedColumn({
        name: 'id_comprobante'
    })
    id_comprobante: number;

    @Column({
        name: 'cod_producto'
    })
    cod: number


    constructor (
        id_comprobante: number, cod: number
    ){
        this.id_comprobante = id_comprobante;
        this.cod = cod;
        
    }

}