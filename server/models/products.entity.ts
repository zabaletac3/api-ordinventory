import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, ManyToMany, JoinColumn, OneToMany } from "typeorm";
import { Comprobante } from "./comprobant.entity";
import { DetalleComprobante } from "./detalle.comprobante.entity";


@Entity({
    name: 'producto'
})
export class Products {

    @PrimaryGeneratedColumn({
        name: 'cod_producto'
    })
    cod: number;

    @Column({
        length: 50
    })
    nom_producto: string

    @Column({
        name: 'precio'
    })
    precio: number

    @Column({
        name: 'existencia'
    })
    existencia: number

    // @OneToOne(() => Comprobante, (comprobante) => comprobante.products)
    // comprobante!: Comprobante;

    // @ManyToMany(() => Comprobante, (comprobante: Comprobante) => comprobante.Products)
    // comprobante!: Comprobante

    @ManyToMany( () => DetalleComprobante, (detalleComprobante: DetalleComprobante) => detalleComprobante.producto )
    detalleComprobante!: DetalleComprobante
    

    constructor ( 
        cod: number, nom_producto: string, precio: number, existencia: number
    ) {
        this.cod = cod;
        this.nom_producto = nom_producto;
        this.precio = precio;
        this.existencia = existencia;
    }

}