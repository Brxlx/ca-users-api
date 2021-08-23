interface IUserResponseDTO {
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  address: string;
  bio?: string;
  createdAt?: string;
}

export { IUserResponseDTO };
