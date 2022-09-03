import express, { Express } from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import * as bcrypt from 'bcrypt';

import { PORT } from '../server/config/config';

export const server: Express = express()

import { appRouter } from '../server/routes/index';


server.set('port', PORT);

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());
server.use(express.json());



server.use('/v1/api/ord-inventory', appRouter);
