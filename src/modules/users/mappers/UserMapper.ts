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

  static usersToDTO(users: User[]): IUserResponseDTO[] {
    return users.map(user => {
      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        nickname: `@${user.nickname}`,
        address: user.address,
        bio: user.bio,
        createdAt: user.createdAt,
      };
    });
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
