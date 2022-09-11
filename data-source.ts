import { DataSource } from 'typeorm';

import { Comprobante } from './server/models/comprobant.entity';
import { DetalleComprobante } from './server/models/detalle.comprobante.entity';
import { Employees } from './server/models/employees.entity';
import { Products } from './server/models/products.entity';
import { User } from './server/models/user.entity';

import 'reflect-metadata';
import 'reflect-metadata';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "ord_ventory",
    //synchronize: false,
    logging: false,
    entities: [User, Products, Employees, Comprobante, DetalleComprobante],
    migrations: [],
    subscribers: [],
});
