import { useMutation } from '@tanstack/vue-query';
import { useAuthStore } from '@/stores/auth.store';

import { singin, singout } from '@/api/services/auth';
import type { LoginResponseModel, UserModel } from '@/types';

const useLogin = () => {
  const authStore = useAuthStore();
  return useMutation({
    mutationFn: singin,
    onSuccess: (loginResponse: LoginResponseModel) => {
      const { accessToken, refreshToken, expiresIn, tokenType, idToken } = loginResponse;
      authStore.setToken(accessToken);
      authStore.setExpireIn(expiresIn);
      authStore.setUser({} as UserModel);
      authStore.isAuthenticated = true;
      authStore.setErrorMessage('');
    },
    onError: (error) => {
      authStore.setErrorMessage(error.message);
      console.error('Login failed:', error);
    }
  });
};

const useLogout = () => {
  const authStore = useAuthStore();
  return useMutation({
    mutationFn: singout,
    onSuccess: (data: boolean) => {
      authStore.setToken('');
      authStore.setUser({} as UserModel);
      authStore.isAuthenticated = data;
      authStore.setErrorMessage('');
    },
    onError: (error) => {
      authStore.setErrorMessage(error.message);
      console.error('Login failed:', error);
    }
  });
};

export { useLogin, useLogout };
