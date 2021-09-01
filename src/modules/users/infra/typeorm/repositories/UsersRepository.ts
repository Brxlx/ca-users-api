import { ICreateUserDTO } from 'src/modules/users/dtos/ICreateUserDTO';
import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';

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

  public async findById(id: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { id },
    });
  }

  public async updateNickname(id: string, nickname: string): Promise<UpdateResult> {
    return this.usersRepository.update(id, { nickname });
  }

  public async delete(id: string): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }
}

export { UsersRepository };
