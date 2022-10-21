<template>
  <div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase
             bg-gray-50 dark:bg-gray-700
             dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="py-3 px-6">#</th>
          <th scope="col" class="py-3 px-6">Name</th>
          <th scope="col" class="py-3 px-6">Position</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="employee in employees"
          :key="employee.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th scope="row" class="py-4 px-6">{{ employee.id }}</th>
          <td class="py-4 px-6">{{ employee.name }}</td>
          <td class="py-4 px-6">{{ employee.position }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import axios from 'axios';
import {useEmployeeStore} from '@/stores/employee.js';

export default {
  name: 'AllEmployeeView',
  setup() {
    const employeeStore = useEmployeeStore();
    return {employeeStore};
  },
  data() {
    return {
      employees: Array,
    };
  },
  created() {
    this.getEmployees();
  },
  methods: {
    async getEmployees() {
      await this.employeeStore.fetch();
      this.employees = this.employeeStore.employees;
    },
  },
  mounted() {
    console.log('Employee List Component Mounted');
  },
};
</script>
