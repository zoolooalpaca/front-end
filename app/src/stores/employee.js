import { defineStore } from 'pinia';
import { employeeAPI } from '@/services/api.js';

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

    async save(employee) {
      const response = await employeeAPI.saveNew(employee);
      if (response.success) {
        this.employees.push(response);
        return response.employeeId;
      }
      return false;
    },

    delete(employeeId) {
      this.employees = this.employees.filter((employee) => employee.employeeId !== employeeId);
    }
  },
});
