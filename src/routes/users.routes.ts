import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { CreateUserUseCase } from '../modules/users/useCases/createUser/CreateUserUseCase';

const createUserController = new CreateUserController(CreateUserUseCase);

class UsersRoutes {
  constructor(private fastify: FastifyInstance) {
    this.fastify = fastify;
  }

  public loadRoutes(): void {
    try {
      // Registra cada rota no plugin
      this.fastify.register(
        (instance: FastifyInstance, opts: FastifyPluginOptions, next) => {
          // Rotas dentro do mesmo grupo
          instance.get('/', createUserController.handle);
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
