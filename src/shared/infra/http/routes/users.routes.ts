import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { GetAllUsersController } from 'src/modules/users/useCases/GetAllUsers/GetAllusersController';
import { container } from 'tsyringe';

import { CreateUserController } from '../../../../modules/users/useCases/CreateUser/CreateUserController';

const createUserController = container.resolve(CreateUserController);
const getAllUsersController = container.resolve(GetAllUsersController);

class UsersRoutes {
  constructor(private fastify: FastifyInstance) {}

  public loadRoutes(): void {
    try {
      // Registra cada rota no plugin
      this.fastify.register(
        (instance: FastifyInstance, opts: FastifyPluginOptions, next) => {
          // Rotas dentro do mesmo grupo
          instance.get('/', getAllUsersController.handle);
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
