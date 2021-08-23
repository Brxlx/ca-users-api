import { IUserResponseDTO } from '../dtos/IUserResponseDTO';
import { User } from '../infra/typeorm/entities/Users';

class UserMapper {
  static userToDTO({ id, firstName, lastName, nickname, address, bio }: User): IUserResponseDTO {
    return {
      id,
      firstName,
      lastName,
      nickname,
      address,
      bio,
    };
  }

  static usersToDTO([
    { id, firstName, lastName, nickname, address, bio, createdAt },
  ]: User[]): IUserResponseDTO[] {
    return [
      {
        id,
        firstName,
        lastName,
        nickname,
        address,
        bio,
        createdAt,
      },
    ];
  }
}

export { UserMapper };
