import express from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';
import { connectToDb } from './database';

dotenv.config();
const server = express();
const port = Number(process.env.PORT) || 8080;
server.use(express.json())
server.use(cors());
server.use(routes);

const startServer = async () => {
    await server.listen(port, () => {
        console.log(`Server is listening at http://localhost:${port}`);
    });
}

(async () => {
    await connectToDb();
    await startServer();
})();
