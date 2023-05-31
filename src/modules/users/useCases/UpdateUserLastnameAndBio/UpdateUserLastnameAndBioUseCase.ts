import AppError from 'src/shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import { User } from '../../infra/typeorm/entities/Users';
import { UsersRepositoryContract } from '../../repositories/contracts/UsersRepositoryContract';

@injectable()
class UpdateUserLastnameAndBioUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryContract
  ) {}

  async execute(id: string, lastName: string, bio: string): Promise<User> {
    if (!id) throw new AppError('Missing arguments');

    const findUser = await this.usersRepository.findById(id);

    if (!findUser) throw new AppError('User not found or invalid');

    const bioValue = bio || findUser.bio;

    const updateUser = await this.usersRepository.updateLastnameAndBio(id, lastName, bioValue);

    if (updateUser.affected === 0) throw new AppError('Error trying to update user');

    const findUpdatedUser = await this.usersRepository.findById(id);

    return findUpdatedUser;
  }
}

export { UpdateUserLastnameAndBioUseCase };
