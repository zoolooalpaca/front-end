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

    async save(employee) {
      const response = await employeeAPI.saveNew(employee);
      if (response.success) {
        this.employees.push(response);
        return response.employeeId;
      }
      return false;
    },

    delete(employeeId) {
      this.employees = this.employees.filter(
          (employee) => employee.employeeId !== employeeId,
      );
    },

    async update(employee) {
      const response = await employeeAPI.update(employee);
      if (response.success) {
        const index = this.employees.findIndex(
            (employee) => employee.employeeId === response.employeeId,
        );
        this.employees[index] = response;
        return response.employeeId;
      }
      return false;
    },

    async get(employeeId) {
      const response = await employeeAPI.get(employeeId);
      if (response.success) {
        return response;
      }
      return false;
    },
  },
});
