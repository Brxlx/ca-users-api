import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  // private usersRepository: Repository<Users>

  public async send(): Promise<string> {
    return 'Hello';
  }
}

export { UsersRepository };
