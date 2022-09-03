import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';



@Entity({
    name: 'usuarios'
})
export class User  {

    @PrimaryGeneratedColumn({
        name: 'id_usuario'
    })
    id: number;

    @Column({
        length: 50, unique: true
    })
    username: string;

    @Column({
        unique: true
    })
    identificacion: number;

    @Column({
        length: 300
    })
    contrasena: string;

    @Column({
        name: 'role', length: 20
    })
    role: string;

    constructor(
        id: number, username: string, identificacion: number, contrasena: string, role: string
    ) {
        this.id = id;
        this.username = username;
        this.identificacion = identificacion;
        this.contrasena = contrasena;
        this.role = role;
    }

}