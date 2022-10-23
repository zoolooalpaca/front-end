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

    delete(table_number) {
      this.tables = this.tables.filter(
          (table) => table.table_number !== table_number,
      );
    },
  },
});
