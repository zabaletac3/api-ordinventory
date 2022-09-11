import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';

import { Comprobante } from './comprobant.entity';
import { Employees } from './employees.entity';


@Entity({
    name: 'usuarios'
})
@Unique(['identificacion'])
export class User  {

    @PrimaryGeneratedColumn({
        name: 'id_usuario'
    })
    id: number;

    @Column({
        length: 50, unique: true
    })
    username: string;

    // @OneToOne ( () => Employees, (employees:Employees) => employees.User )
    // @JoinColumn({name: 'identificacion'})
    // Employees!: Employees

    @OneToOne( () => Employees )
    @JoinColumn({name: 'identificacion'})
    identificacion!: Employees

    // @Column({
    //     unique: true
    // })
    // identificacion: number;

    @Column({
        length: 300
    })
    contrasena: string;

    @Column({
        name: 'role', length: 20
    })
    role: string;

    @OneToMany   ( () => Comprobante, (comprobante:Comprobante) => comprobante.User )
    comprobante!:Comprobante


    constructor(
        id: number, username: string, contrasena: string, role: string
    ) {
        this.id = id;
        this.username = username;
        this.contrasena = contrasena;
        this.role = role;
    }

}