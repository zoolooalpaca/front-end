import {defineStore} from 'pinia';
import {employeeAPI} from '@/services/api.js';

export const useEmployeeStore = defineStore({
  id: 'employee',
  state: () => {
    return {
      employees: [],
    };
  },
  getter: {
    getEmployees: (state) => state.employees,
  },
  actions: {
    async fetch() {
      this.employees = await employeeAPI.getAll();
    },
  },
});
