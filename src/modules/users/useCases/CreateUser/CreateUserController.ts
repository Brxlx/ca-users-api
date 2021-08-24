import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

interface IUserRequest {
  body: {
    firstName: string;
    lastName: string;
    nickname: string;
    bio?: string;
    address: string;
  };
}

class CreateUserController {
  async handle(req: FastifyRequest & IUserRequest, reply: FastifyReply): Promise<void> {
    const { firstName, lastName, nickname, bio, address } = req.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const resp = await createUserUseCase.execute({ firstName, lastName, nickname, bio, address });
    reply.code(201).send(resp);
  }
}

export { CreateUserController };
