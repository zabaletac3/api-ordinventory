import "reflect-metadata";
import { DataSource } from "typeorm";
import { Employees } from "./server/models/employees.entity";
import { Products } from "./server/models/products.entity";
import { User } from "./server/models/user.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Zabaleta3#",
    database: "ord_ventory",
    synchronize: true,
    logging: false,
    entities: [User, Products, Employees],
    migrations: [],
    subscribers: [],
});
