import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/users/infra/typeorm/repositories/UsersRepository';
import { UsersRepositoryContract } from '../../modules/users/repositories/contracts/UsersRepositoryContract';

container.registerSingleton<UsersRepositoryContract>('UsersRepository', UsersRepository);
