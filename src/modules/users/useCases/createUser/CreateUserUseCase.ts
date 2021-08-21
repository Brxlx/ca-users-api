import AppError from 'src/shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../infra/typeorm/entities/Users';
import { UsersRepositoryContract } from '../../repositories/contracts/UsersRepositoryContract';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryContract
  ) {}

  async execute(data: ICreateUserDTO): Promise<User> {
    const { nickname } = data;
    // check if nickname already exists
    const checkNickname = await this.usersRepository.findByNickname(nickname);
    if (checkNickname) throw new AppError('Nickname already exists');
    try {
      const resp = await this.usersRepository.create(data);
      return resp;
    } catch (err) {
      throw new AppError(`Error trying create new user -> ${err.message}`);
    }
  }
}

export { CreateUserUseCase };
