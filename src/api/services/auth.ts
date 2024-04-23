import api from '@/api/api';
import Endpoint from '../endpoint';
import type { LoginResponseModel, UserModel } from '@/types';

async function singin(credentials: UserModel) {
  const { data } = await api.post<LoginResponseModel>(Endpoint.SIGNIN_URI, credentials);
  return data;
}

async function singout(credentials: UserModel) {
  const { data } = await api.post<any>(Endpoint.SIGNOUT_URI, credentials);
  return data;
}

export { singin, singout };
