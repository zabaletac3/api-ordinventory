import {Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import { Products } from './products.entity';


@Entity ({
    name: 'comprobante'
})
export class Comprobante {

    @PrimaryGeneratedColumn({
        name: 'id_comprobante'
    })
    id: number;

    constructor (
        id: number
    ){
        this.id = id;
        
    }

}