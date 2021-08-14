import { FastifyReply, FastifyRequest } from 'fastify';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    reply.send({ resp: 'Aeee papai' });
  }
}

export { CreateUserController };
