import { UsersRepository } from './implementations/UsersRepository';

class IUsersRepository implements UsersRepository {
  send: () => Promise<string>;
}

export { IUsersRepository };
