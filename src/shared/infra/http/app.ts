import 'reflect-metadata';
import 'dotenv/config';
import fastify from 'fastify';
import cors from 'fastify-cors';

import { GlobalErrorHandler } from '../../errors/GlobalErrorHandler';
import { dbConnect } from '../database/typeorm';
import { Routes } from './routes';

import '../../container';

// GQL Session
// import resolvers from ''
// import schemas from ''

const app = fastify({
  logger: {
    level: 'trace',
    prettyPrint: true,
  },
});

// Global Error handler
app.setErrorHandler(GlobalErrorHandler);

// cors configuration
app.register(cors, _ => async (req, callback) => {
  const options = {
    credentials: true,
    allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept'],
    origin: true,
  };

  const checkOrigin = req.socket.remoteAddress;
  const whitelist = ['localhost', '127.0.0.1', '192.168.0.103'];
  if (whitelist.indexOf(checkOrigin) !== -1) {
    callback(null, options);
  } else {
    callback(new Error('Not allowed origin'));
  }
});

// app.register(cors, {
//   origin: (org, cb) => {
//     const whitelist = ['localhost', '127.0.0.1', '192.168.0.100', undefined];
//     if (whitelist.indexOf(org) !== -1) {
//       cb(null, true);
//       return;
//     }
//     cb(new Error('Not allowed origin'), false);
//   },
//   allowedHeaders: ['Origin', 'X-Requested-With, Content-Type', 'Accept'],
//   preflight: true,
// });

// db connection
app.register(dbConnect);

// load routes
const routes = new Routes();
app.register(routes.loadRoutes, { prefix: 'v1', logLevel: 'trace' });

export { app };
