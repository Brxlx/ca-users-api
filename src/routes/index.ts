import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { UsersRoutes } from './users.routes';

// const userRoutes = new UsersRoutes(fastify);
class Routes {
  public loadRoutes(fastify: FastifyInstance, options: FastifyPluginOptions, done: Function) {
    new UsersRoutes(fastify).loadRoutes();

    done();
  }
}

export { Routes };
