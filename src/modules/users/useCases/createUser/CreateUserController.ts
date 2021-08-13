import { FastifyReply, FastifyRequest } from 'fastify';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    console.log('No controller');

    reply.callNotFound();
  }
}

export { CreateUserController };
