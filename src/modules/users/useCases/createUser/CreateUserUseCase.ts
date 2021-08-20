import AppError from 'src/shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import { delay } from '../../../../shared/utils/delay';
// import { User } from '../../infra/typeorm/entities/Users';
import { IUsersRepository } from '../../repositories/contracts/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<void> {
    try {
      await delay(1500);
      const resp = await this.usersRepository.create();
      return resp;
    } catch (err) {
      console.log(err);
      throw new AppError('oasjaushaushuahs', 405);
    }
  }
}

export { CreateUserUseCase };
