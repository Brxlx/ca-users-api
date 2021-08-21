import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../infra/typeorm/entities/Users';

abstract class UsersRepositoryContract {
  public findAll: () => Promise<User[]>;

  public create: (data: ICreateUserDTO) => Promise<User>;

  public findByNickname: (nickname: string) => Promise<User>;
}

export { UsersRepositoryContract };
