import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


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

    constructor ( 
        cod: number, nom_producto: string, precio: number, existencia: number
    ) {
        this.cod = cod;
        this.nom_producto = nom_producto;
        this.precio = precio;
        this.existencia = existencia;
    }

}