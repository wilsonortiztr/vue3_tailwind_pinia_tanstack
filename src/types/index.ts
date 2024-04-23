export class UserModel {
  username?: string;
  phone?: string;
  password?: string;
  email?: string;
  address?: string;
  firstName?: string;
  lastNames?: string;
  gender?: string;
  birthdate?: string;
  role?: string;
}

export interface LoginResponseModel {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
  idToken: string;
}
