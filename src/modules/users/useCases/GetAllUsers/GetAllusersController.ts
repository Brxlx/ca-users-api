import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';

import { GetAllUsersUseCase } from './GetAllusersUseCase';

class GetAllUsersController {
  async handle(_: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const getAllUsersuseCase = container.resolve(GetAllUsersUseCase);
    const resp = await getAllUsersuseCase.execute();
    return reply.code(200).send(resp);
  }
}

export { GetAllUsersController };
