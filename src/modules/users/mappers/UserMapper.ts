import { IUserResponseDTO } from '../dtos/IUserResponseDTO';
import { User } from '../infra/typeorm/entities/Users';

class UserMapper {
  static userToDTO({ id, firstName, lastName, nickname, address, bio }: User): IUserResponseDTO {
    return {
      id,
      firstName,
      lastName,
      nickname: `@${nickname}`,
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
        nickname: `@${nickname}`,
        address,
        bio,
        createdAt,
      },
    ];
  }

  static userNicknameToDTO({
    firstName,
    lastName,
    nickname,
  }: User): Pick<IUserResponseDTO, 'firstName' | 'lastName' | 'nickname'> {
    return {
      firstName,
      lastName,
      nickname: `@${nickname}`,
    };
  }
}

export { UserMapper };
