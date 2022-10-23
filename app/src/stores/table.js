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
        return response.tableId;
      }
      return false;
    },

    delete(tableId) {
      this.tables = this.tables.filter(
          (table) => table.tableId !== tableId,
      );
    },
  },
});
