import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';

import { GetAllUsersUseCase } from './GetAllusersUseCase';

class GetAllUsersController {
  async handle(_: FastifyRequest, reply: FastifyReply): Promise<void> {
    const getAllUsersuseCase = container.resolve(GetAllUsersUseCase);
    const resp = await getAllUsersuseCase.execute();
    reply.code(200).send(resp);
  }
}

export { GetAllUsersController };
