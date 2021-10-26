import { ICreateUserDTO } from 'src/modules/users/dtos/ICreateUserDTO';
import { User } from 'src/modules/users/infra/typeorm/entities/Users';
import { CreateUserUseCase } from 'src/modules/users/useCases/CreateUser/CreateUserUseCase';
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
      const getUserUseCase = container.resolve(GetUserUseCase);
      return getUserUseCase.execute(nickname);
    },
  },
  Mutation: {
    async createUser(_: any, { firstName, lastName, nickname, address, bio }: ICreateUserDTO) {
      const createUserUseCase = container.resolve(CreateUserUseCase);
      return createUserUseCase.execute({ firstName, lastName, nickname, address, bio });
    },
  },
};

export default usersResolver;
