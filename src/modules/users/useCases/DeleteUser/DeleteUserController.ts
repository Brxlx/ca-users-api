import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';

import { DeleteUserUseCase } from './DeleteUserUseCase';

interface IUserRequest {
  params: {
    id: string;
  };
}

class DeleteUserController {
  async handle(req: FastifyRequest & IUserRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = req.params;
    const deleteUserUseCase = container.resolve(DeleteUserUseCase);
    await deleteUserUseCase.execute(id);

    return reply.code(200).send();
  }
}

export { DeleteUserController };
