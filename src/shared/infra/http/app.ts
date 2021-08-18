import 'reflect-metadata';
import 'dotenv/config';
import fastify from 'fastify';
import cors from 'fastify-cors';

import { GlobalErrorHandler } from '../../errors/GlobalErrorHandler';
import { dbConnect } from '../database/typeorm';
import { Routes } from './routes';
import '../../container';

const app = fastify({
  logger: { level: 'trace', prettyPrint: true },
  trustProxy: ['127.0.0.1', '192.168.0.100/24'],
});
// Global Error handler
app.setErrorHandler(GlobalErrorHandler);

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
