import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';

import { UpdateUserNicknameUseCase } from './UpdateUserNicknameUseCase';

interface IUserRequest {
  params: {
    id: string;
  };
  body: {
    nickname: string;
  };
}

class UpdateUserNicknameController {
  async handle(req: FastifyRequest & IUserRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = req.params;
    const { nickname } = req.body;
    const updateUserNickanemUseCase = container.resolve(UpdateUserNicknameUseCase);
    const updatedUser = await updateUserNickanemUseCase.execute(id, nickname);

    return reply.code(200).send(updatedUser);
  }
}

export { UpdateUserNicknameController };
