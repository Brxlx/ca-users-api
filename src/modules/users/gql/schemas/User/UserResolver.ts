import { ICreateUserDTO } from 'src/modules/users/dtos/ICreateUserDTO';
import { IUserResponseDTO } from 'src/modules/users/dtos/IUserResponseDTO';
import { User } from 'src/modules/users/infra/typeorm/entities/Users';
import { CreateUserUseCase } from 'src/modules/users/useCases/CreateUser/CreateUserUseCase';
import { GetUserUseCase } from 'src/modules/users/useCases/GetUser/GetUserUseCase';
import { UpdateUserNicknameUseCase } from 'src/modules/users/useCases/UpdateUserNickname/UpdateUserNicknameUseCase';
import { container } from 'tsyringe';

import { GetAllUsersUseCase } from '../../../useCases/GetAllUsers/GetAllusersUseCase';

const usersResolver = {
  Query: {
    async getAllUsers(): Promise<IUserResponseDTO[]> {
      const getAllUsersUseCase = container.resolve(GetAllUsersUseCase);
      return getAllUsersUseCase.execute();
    },

    async getUser(
      _: any,
      { nickname }: User
    ): Promise<Pick<IUserResponseDTO, 'nickname' | 'firstName' | 'lastName'>> {
      const getUserUseCase = container.resolve(GetUserUseCase);
      return getUserUseCase.execute(nickname);
    },
  },
  Mutation: {
    async createUser(
      _: any,
      { firstName, lastName, nickname, address, bio }: ICreateUserDTO
    ): Promise<User> {
      const createUserUseCase = container.resolve(CreateUserUseCase);
      return createUserUseCase.execute({ firstName, lastName, nickname, address, bio });
    },

    async updateUserNickname(_: any, { id, nickname }: User): Promise<User> {
      const updateUserUseCase = container.resolve(UpdateUserNicknameUseCase);
      return updateUserUseCase.execute(id, nickname);
    },
  },
};

export default usersResolver;
