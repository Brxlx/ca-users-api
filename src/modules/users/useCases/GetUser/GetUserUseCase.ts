import AppError from 'src/shared/errors/AppError';
import { DateProviderContract } from 'src/shared/providers/DateProvider/DateProviderContract';
import { injectable, inject } from 'tsyringe';

import { IUserResponseDTO } from '../../dtos/IUserResponseDTO';
import { UserMapper } from '../../mappers/UserMapper';
import { UsersRepositoryContract } from '../../repositories/contracts/UsersRepositoryContract';

@injectable()
class GetUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryContract,
    private dateProvider: DateProviderContract
  ) {}

  async execute(
    nickname: string
  ): Promise<Pick<IUserResponseDTO, 'firstName' | 'lastName' | 'nickname'>> {
    if (!nickname) throw new AppError('nickname is required');

    const user = await this.usersRepository.findByNickname(nickname);

    if (!user) throw new AppError('User not found', 404);
    return UserMapper.userNicknameToDTO(user);
  }
}

export { GetUserUseCase };
