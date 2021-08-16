import 'reflect-metadata';
import 'dotenv/config';
import fastify from 'fastify';
import cors from 'fastify-cors';

import { dbConnect } from './database';
import { Routes } from './routes';
import './shared/container';

const app = fastify({ logger: true });

// cors configuration
app.register(cors, {
  origin: (org, cb) => {
    // org = '192.168.0.0';
    if (/localhost/.test(org) || /undefined/.test(org)) {
      cb(null, true);
    } else {
      cb(new Error('Not allowed origin'), false);
    }
  },
});

// db connection
app.register(dbConnect);

// load routes
const routes = new Routes();
app.register(routes.loadRoutes, { prefix: 'v1', logLevel: 'debug' });

export { app };
