import { getRepository } from 'typeorm';

import { IUsersRepository } from '../../../repositories/contracts/IUsersRepository';
import { User } from '../entities/Users';

class UsersRepository implements IUsersRepository {
  private usersRepository = getRepository(User);

  public async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}

export { UsersRepository };
