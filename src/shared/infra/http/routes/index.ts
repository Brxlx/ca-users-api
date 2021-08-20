import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { HealthRoutes } from './health.routes';
import { UsersRoutes } from './users.routes';
// const userRoutes = new UsersRoutes(fastify);

class Routes {
  public loadRoutes(fastify: FastifyInstance, options: FastifyPluginOptions, done: Function) {
    new HealthRoutes(fastify).loadRoutes();
    new UsersRoutes(fastify).loadRoutes();
    done();
  }
}

export { Routes };
