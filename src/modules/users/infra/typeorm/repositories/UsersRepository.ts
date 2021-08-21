import { ICreateUserDTO } from 'src/modules/users/dtos/ICreateUserDTO';
import { getRepository, Repository } from 'typeorm';

import { UsersRepositoryContract } from '../../../repositories/contracts/UsersRepositoryContract';
import { User } from '../entities/Users';

class UsersRepository implements UsersRepositoryContract {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getRepository(User);
  }

  public async create(data: Omit<ICreateUserDTO, 'id'>): Promise<User> {
    const createNewUser = this.usersRepository.create(data);

    return this.usersRepository.save(createNewUser);
  }

  public async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  public async findByNickname(nickname: string): Promise<User> {
    return this.usersRepository.findOne({ where: { nickname } });
  }
}

export { UsersRepository };
