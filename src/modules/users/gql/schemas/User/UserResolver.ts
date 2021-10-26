import { User } from 'src/modules/users/infra/typeorm/entities/Users';
import { GetUserUseCase } from 'src/modules/users/useCases/GetUser/GetUserUseCase';
import { container } from 'tsyringe';

import { GetAllUsersUseCase } from '../../../useCases/GetAllUsers/GetAllusersUseCase';

const usersResolver = {
  Query: {
    async getAllUsers() {
      const getAllUsersUseCase = container.resolve(GetAllUsersUseCase);
      return getAllUsersUseCase.execute();
    },

    async getUser(_: any, { nickname }: User) {
      const getUser = container.resolve(GetUserUseCase);
      return getUser.execute(nickname);
    },
  },
  // Mutation: {},
};

export default usersResolver;
