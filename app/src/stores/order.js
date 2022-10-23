import {defineStore} from 'pinia';
import {orderAPI} from '@/services/api.js';

export const useOrderStore = defineStore({
  id: 'order',
  state: () => {
    return {
      orders: [],
    };
  },

  getters: {
    getOrders: (state) => state.orders,
  },

  actions: {
    async fetch() {
      this.orders = await orderAPI.getAll();
    },

    async save(order) {
      const response = await orderAPI.saveNew(order);
      if (response.success) {
        this.orders.push(response);
        return response.order_number;
      }
      return false;
    },

    delete(orderNumber) {
      this.orders = this.orders.filter(
          (order) => order.order_number !== orderNumber,
      );
    },

    async update(order) {
      const response = await orderAPI.update(order);
      if (response.success) {
        const index = this.orders.findIndex(
            (o) => o.order_number === order.order_number,
        );
        this.orders[index] = order;
      }
    },

    async get(orderNumber) {
      const response = await orderAPI.get(orderNumber);
      if (response.success) {
        return response;
      }
      return false;
    },
  },
});
