import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({
    name: 'empleado'
})
export class Employees {

    @PrimaryColumn({
        name: 'identificacion'
    })
    id: number;

    @Column({
        length: 50
    })
    nombre: string;

    @Column({
        length: 50
    })
    apellido: string;

    @Column({
        length: 12
    })
    telefono: string;

    @Column({
        length: 100
    })
    direccion: string;

    @Column({
        length: 50
    })
    ciudad: string;

    @Column({
        length: 50
    })
    email: string;

    @Column({
        length: 50
    })
    cargo: string;

    @OneToOne (  () => User, (user: User) => user.identificacion )
    user!: User

    constructor(
        id: number, nombre: string, apellido: string, telefono: string, 
        direccion: string, ciudad: string, email: string, cargo: string
    ){
        this.id = id;
        this.nombre = nombre;
        this.apellido= apellido;
        this.telefono = telefono;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.email =  email
        this.cargo = cargo;
    }


}