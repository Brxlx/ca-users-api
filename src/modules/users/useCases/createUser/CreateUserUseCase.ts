import AppError from 'src/shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

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
      const resp = await this.usersRepository.create();
      return resp;
    } catch (err) {
      throw new AppError('oasjaushaushuahs', 405);
    }
  }
}

export { CreateUserUseCase };
