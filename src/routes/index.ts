import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { UsersRoutes } from './users.routes';

// const userRoutes = new UsersRoutes();
class Routes {
  public loadRoutes(fastify: FastifyInstance, options: FastifyPluginOptions, done: Function) {
    // userRoutes.loadRoutes(fastify);
    new UsersRoutes(fastify).loadRoutes();

    done();
  }
}

export { Routes };
