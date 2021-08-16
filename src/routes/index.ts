import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';

import { UsersRoutes } from './users.routes';

// const userRoutes = new UsersRoutes(fastify);
class Routes {
  public loadRoutes(fastify: FastifyInstance, options: FastifyPluginOptions, done: Function) {
    // Test route
    fastify.register(
      (instance: FastifyInstance, opts: FastifyPluginOptions, next) => {
        // Rotas dentro do mesmo grupo
        instance.get('/', async (req: FastifyRequest, res: FastifyReply) => {
          return res.send({ resp: 'Hello' });
        });
        next();
      },
      { prefix: 'test' }
    );

    new UsersRoutes(fastify).loadRoutes();

    done();
  }
}

export { Routes };
