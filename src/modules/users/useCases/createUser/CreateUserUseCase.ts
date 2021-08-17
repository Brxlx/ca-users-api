import { injectable, inject } from 'tsyringe';

import { IUsersRepository } from '../../repositories/contracts/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<string> {
    const resp = await this.usersRepository.send();

    return resp;
  }
}

export { CreateUserUseCase };
