import {defineStore} from 'pinia';
import {tableAPI} from '@/services/api.js';

export const useTableStore = defineStore({
  id: 'table',
  state: () => {
    return {
      tables: [],
    };
  },
  getter: {
    getTables: (state) => state.tables,
  },
  actions: {
    async fetch() {
      this.tables = await tableAPI.getAll();
    },

    async save(table) {
      const response = await tableAPI.saveNew(table);
      if (response.success) {
        this.tables.push(response);
        return response.table_number;
      }
      return false;
    },

    delete(tableId) {
      this.tables = this.tables.filter(
          (table) => table.id !== tableId,
      );
    },

    async update(table) {
      const response = await tableAPI.update(table);
      if (response.success) {
        const index = this.tables.findIndex(
            (table) => table.id === response.id,
        );
        this.tables[index] = response;
        return response.id;
      }
      return false;
    },

    async get(tableId) {
      const response = await tableAPI.get(tableId);
      if (response.success) {
        return response;
      }
      return false;
    },
  },
});
