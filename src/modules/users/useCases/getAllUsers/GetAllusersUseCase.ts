import { injectable, inject } from 'tsyringe';

import { User } from '../../infra/typeorm/entities/Users';
import { UsersRepositoryContract } from '../../repositories/contracts/UsersRepositoryContract';

@injectable()
class GetAllUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryContract
  ) {}

  async execute(): Promise<User[]> {
    return this.usersRepository.findAll();
  }
}

export { GetAllUsersUseCase };
