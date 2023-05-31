import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';

import { GetUserUseCase } from './GetUserUseCase';

interface IUserRequest {
  params: {
    nickname: string;
  };
}
class GetUserController {
  async handle(req: FastifyRequest & IUserRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { nickname } = req.params;
    const getAllUsersuseCase = container.resolve(GetUserUseCase);
    const resp = await getAllUsersuseCase.execute(nickname);
    return reply.code(200).send(resp);
  }
}

export { GetUserController };
