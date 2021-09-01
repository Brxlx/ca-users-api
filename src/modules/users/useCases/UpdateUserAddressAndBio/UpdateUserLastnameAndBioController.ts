import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';

import { UpdateUserLastnameAndBioUseCase } from './UpdateUserLastnameAndBioUseCase';

interface IUserRequest {
  params: {
    id: string;
  };
  body: {
    lastName: string;
    bio: string;
  };
}

class UpdateUserLastnameAndBioController {
  async handle(req: FastifyRequest & IUserRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = req.params;
    const { lastName, bio } = req.body;
    const updateUserLastnameAndBio = container.resolve(UpdateUserLastnameAndBioUseCase);
    const updatedUser = await updateUserLastnameAndBio.execute(id, lastName, bio);

    return reply.code(200).send(updatedUser);
  }
}

export { UpdateUserLastnameAndBioController };
