import { UpdateResult } from 'typeorm';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../infra/typeorm/entities/Users';

abstract class UsersRepositoryContract {
  public findAll: () => Promise<User[]>;

  public findById: (id: string) => Promise<User>;

  public findByNickname: (nickname: string) => Promise<User>;

  public create: (data: ICreateUserDTO) => Promise<User>;

  public updateLastnameAndBio: (id: string, lastName: string, bio: string) => Promise<UpdateResult>;

  public updateNickname: (id: string, nickname: string) => Promise<UpdateResult>;

  public delete: (id: string) => Promise<void>;
}

export { UsersRepositoryContract };
