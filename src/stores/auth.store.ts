import { ref } from 'vue';
import { defineStore } from 'pinia';
import { UserModel } from '@/types';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserModel | null>(null);
  const token = ref<string>('');
  const expiresIn = ref<number>(0);
  const isAuthenticated = ref<boolean>(import.meta.env.MODE !== 'development' || false);
  const isLoading = ref<boolean>(false);
  const errorMessage = ref<string>('');

  // getters

  // actions
  function setUser(newUser: UserModel) {
    user.value = newUser;
  }
  function setToken(newToken: any) {
    token.value = newToken;
  }
  function setExpireIn(newExpireIn: any) {
    expiresIn.value = newExpireIn;
  }
  function clearAuth() {
    user.value = null;
    token.value = '';
  }
  function setErrorMessage(newError: string) {
    errorMessage.value = newError;
  }

  return {
    user,
    token,
    expiresIn,
    isAuthenticated,
    isLoading,
    errorMessage,

    setUser,
    setToken,
    setExpireIn,
    clearAuth,
    setErrorMessage
  };
});
