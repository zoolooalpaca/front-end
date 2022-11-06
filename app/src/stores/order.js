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
      this.orders = await orderApi.getAll();
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
      // const response = orderApi.delete(orderId);
      const data = this.orders.data.map((order) => {
        const filteredOrder = {...order, order_description: order.order_description.filter((od) => od.id !== orderId)}
        console.log(filteredOrder)
        return filteredOrder
        // const response = orderApi.delete(orderId);
        // if (response.success) {
        //   this.orders = {data};
        //   return response;
        // }
        // return false;
        // return filteredOrder;        
      });

      this.orders = {data}

    },
  },
});
