//import { useAuthStore } from '@/stores/auth.store'
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_ESHOP_CORE_URI
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
