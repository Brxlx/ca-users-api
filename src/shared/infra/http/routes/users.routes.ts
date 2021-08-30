import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { container } from 'tsyringe';

import { CreateUserController } from '../../../../modules/users/useCases/CreateUser/CreateUserController';
import { DeleteUserController } from '../../../../modules/users/useCases/DeleteUser/DeleteUserController';
import { GetAllUsersController } from '../../../../modules/users/useCases/GetAllUsers/GetAllusersController';
import { GetUserController } from '../../../../modules/users/useCases/GetUser/GetUserController';

class UsersRoutes {
  constructor(private fastify: FastifyInstance) {}

  public loadRoutes(): void {
    const createUserController = container.resolve(CreateUserController);
    const getAllUsersController = container.resolve(GetAllUsersController);
    const getUserController = container.resolve(GetUserController);
    const deleteUserController = container.resolve(DeleteUserController);

    try {
      // Registra cada rota no plugin
      this.fastify.register(
        (instance: FastifyInstance, opts: FastifyPluginOptions, next) => {
          // Rotas dentro do mesmo grupo
          instance.get('/', getAllUsersController.handle);
          instance.get('/user/:nickname', getUserController.handle);
          instance.post('/', createUserController.handle);
          instance.delete('/user/:id', deleteUserController.handle);
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
