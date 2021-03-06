import AppError from 'src/shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import { UsersRepositoryContract } from '../../repositories/contracts/UsersRepositoryContract';

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryContract
  ) {}

  async execute(id: string): Promise<void> {
    if (!id) throw new AppError('Missing arguments');

    const findUser = await this.usersRepository.findById(id);

    if (!findUser) throw new AppError('User not found or invalid');

    const deleteuser = await this.usersRepository.delete(id);

    if (deleteuser.affected === 0) throw new AppError('Error trying to delete user');
  }
}

export { DeleteUserUseCase };
