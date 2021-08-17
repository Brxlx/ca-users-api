import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/users/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../../modules/users/repositories/contracts/IUsersRepository';

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
