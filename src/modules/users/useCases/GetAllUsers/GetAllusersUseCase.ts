import { DateProviderContract } from 'src/shared/providers/DateProvider/DateProviderContract';
import { injectable, inject } from 'tsyringe';

import { IUserResponseDTO } from '../../dtos/IUserResponseDTO';
import { UserMapper } from '../../mappers/UserMapper';
import { UsersRepositoryContract } from '../../repositories/contracts/UsersRepositoryContract';

@injectable()
class GetAllUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryContract,
    private dateProvider: DateProviderContract
  ) {}

  async execute(): Promise<IUserResponseDTO[]> {
    const allUsers = await this.usersRepository.findAll();
    return UserMapper.usersToDTO(allUsers);
  }
}

export { GetAllUsersUseCase };
