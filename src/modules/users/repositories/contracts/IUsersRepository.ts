import { User } from '../../infra/typeorm/entities/Users';

abstract class IUsersRepository {
  public findAll: () => Promise<User[]>;
}

export { IUsersRepository };
