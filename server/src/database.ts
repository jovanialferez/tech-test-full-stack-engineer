import { createConnection } from 'typeorm';
import 'reflect-metadata';

export const connectToDb = async () => {
  await createConnection({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    logging: true,
    entities: [__dirname + "/entity/*{.ts,.js}"]
  });
  console.log('connected to DB');
}