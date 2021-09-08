import { container } from 'tsyringe';

import { GetAllUsersUseCase } from '../../../useCases/GetAllUsers/GetAllusersUseCase';

export const usersResolver = {
  Query: {
    getAllUsers() {
      const getAllUsersUseCase = container.resolve(GetAllUsersUseCase);
      return getAllUsersUseCase.execute();
    },
  },
  Mutation: {},
};
