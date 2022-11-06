import {defineStore} from 'pinia';
import {orderApi} from '@/services/api';

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
      const orderList = await orderApi.getAll();
      this.orders = orderList.data || orderList
    },

    async save(order) {
      const response = await orderApi.saveNew(order);
      if (response.success) {
        this.orders.push(response);
        return response.id;
      }
      return false;
    },

    async update(order) {
      const response = await orderApi.update(order);
      if (response.success) {
        const index = this.orders.findIndex(
            (order) => order.id === response.id,
        );
        this.orders[index] = response;
        return response.id;
      }
      return false;
    },

    async get(orderId) {
      const response = await orderApi.get(orderId);
      if (response.success) {
        return response;
      }
      return false;
    },

    delete(orderId) {
      this.orders = this.orders.filter(
          (order) => order.id !== orderId,
      );
    },
  },
});
