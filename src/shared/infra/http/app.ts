import 'reflect-metadata';
import 'dotenv/config';
import fastify from 'fastify';
import cors from 'fastify-cors';
import mercurius from 'mercurius';

import '../../container';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { GlobalErrorHandler } from '../../errors/GlobalErrorHandler';
import { dbConnect } from '../database/typeorm';
import { resolvers } from '../gql/resolver';
import { schema } from '../gql/schemas';
import { Routes } from './routes';

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
  // Get the origin from the request
  const checkOrigin = req.socket.remoteAddress;

  // Allowable hosts
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

// GQL
app.register(mercurius, {
  schema: makeExecutableSchema({
    typeDefs: schema,
    resolvers,
  }),
  graphiql: true,
  prefix: 'gql',
  logLevel: 'trace',
});

export { app };
