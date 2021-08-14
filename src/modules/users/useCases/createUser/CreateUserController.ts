import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const resp = await createUserUseCase.execute();
    reply.status(201).send({ resp });
  }
}

export { CreateUserController };
