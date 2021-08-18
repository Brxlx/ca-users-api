import { User } from '../../infra/typeorm/entities/Users';

abstract class IUsersRepository {
  public findAll: () => Promise<User[]>;

  public create: () => Promise<void>;
}

export { IUsersRepository };
