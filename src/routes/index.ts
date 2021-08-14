import { FastifyInstance } from 'fastify';

import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { CreateUserUseCase } from '../modules/users/useCases/createUser/CreateUserUseCase';

const opts = {};
const createUserController = new CreateUserController(CreateUserUseCase);

class Routes {
  public loadRoutes(fastify: FastifyInstance, options: any, done: Function) {
    fastify.get('/', opts, createUserController.handle);
    done();
  }
}

export { Routes };
