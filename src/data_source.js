import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User.js";
import { Invoice } from "./entities/Invoice.js";
import { Invoice_Detail } from "./entities/Invoice_Detail.js";
import { Product } from "./entities/Product.js";
import { Category } from "./entities/Category.js";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'dpg-csdanrbqf0us73b2lcj0-a',
    port: 5432, // Puerto por defecto para PostgreSQL
    username: 'balboa_db_user',
    password: '4B617nC881Uu0f6mTGHOPDmIrgzsLGld',
    database: 'balboa_db',
    synchronize: true,
    logging: false,
    entities: [User, Invoice, Invoice_Detail, Product, Category],
    ssl: {
        rejectUnauthorized: false,
    },
})