import router from '../router/index.js';
import {defineStore} from 'pinia';
import {authAPI} from '../services/api.js';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      access_token: localStorage.getItem('access_token'),
      returnUrl: null,
    };
  },
  getter: {
    getEmployees: (state) => state.employees,
  },
  actions: {
    async login(username, password) {
      const userData = {username, password};
      const user = await authAPI.login(userData);
      this.access_token = user.access_token;
      console.log('hello');
      localStorage.setItem('access_token', user.access_token);

      router.push(this.returnUrl || '/');
    },
    logout() {
      this.access_token = null;
      localStorage.removeItem('access_token');
      router.push('/login');
    },
    async addCustomer(table_id) {
      return await authAPI.addCustomer(table_id);
    }
  },
});
