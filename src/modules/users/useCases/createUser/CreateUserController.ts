import { FastifyReply, FastifyRequest } from 'fastify';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    req.log.warn(req.protocol);
    reply.status(201).send({ resp: 'Aeee papai' });
  }
}

export { CreateUserController };
