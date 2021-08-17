import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { CreateUserController } from '../../../../modules/users/useCases/createUser/CreateUserController';

const createUserController = new CreateUserController();

class UsersRoutes {
  constructor(private fastify: FastifyInstance) {}

  public loadRoutes(): void {
    try {
      // Registra cada rota no plugin
      this.fastify.register(
        (instance: FastifyInstance, opts: FastifyPluginOptions, next) => {
          // Rotas dentro do mesmo grupo
          instance.post('/', createUserController.handle);
          next();
        },
        { prefix: 'users' }
      );
    } catch (err) {
      this.fastify.log.error(err);
    }
  }
}

export { UsersRoutes };
