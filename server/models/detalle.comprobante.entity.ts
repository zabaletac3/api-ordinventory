import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { textChangeRangeIsUnchanged } from "typescript";
import { Comprobante } from "./comprobant.entity";
import { Products } from "./products.entity";




@Entity ({
    name: 'detalleComprobante'
})

export class DetalleComprobante {

    @PrimaryGeneratedColumn ()
    id_detalle: number

    @ManyToOne( () => Comprobante, (id_comprobante: Comprobante) => id_comprobante.DetalleComprobante )
    @JoinColumn({name: 'id_comprobante'})
    id_comprobante!: Comprobante

    @ManyToOne ( () => Products, (producto: Products) => producto.detalleComprobante )
    @JoinColumn({name: 'producto'})
    producto!: Products

    @Column()
    cantidad: number

    constructor (
        id_detalle: number, cantidad: number
    ) {
        this.id_detalle = id_detalle
        this.cantidad = cantidad
    }

}