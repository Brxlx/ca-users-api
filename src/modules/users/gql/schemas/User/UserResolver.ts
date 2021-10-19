import { container } from 'tsyringe';

import { GetAllUsersUseCase } from '../../../useCases/GetAllUsers/GetAllusersUseCase';

const usersResolver = {
  Query: {
    async getAllUsers() {
      const getAllUsersUseCase = container.resolve(GetAllUsersUseCase);
      return getAllUsersUseCase.execute();
    },
  },
  // Mutation: {},
};

export default usersResolver;
