import {defineStore} from 'pinia';
import {paymentAPI} from '@/services/api.js';

export const usePaymentStore = defineStore({
  id: 'payment',
  state: () => {
    return {
      payments: [],
    };
  },
  getter: {
    getPayments: (state) => state.payments,
  },
  actions: {
    async fetch() {
      this.payments = await paymentAPI.getAll();
    },

    async save(payment) {
      const response = await paymentAPI.saveNew(payment);
      if (response.success) {
        this.payments.push(response);
        return response.id;
      }
      return false;
    },

    delete(id) {
      this.payments = this.payments.filter(
          (payment) => payment.id !== id,
      );
    },

    async update(payment) {
      const response = await paymentAPI.update(payment);
      if (response.success) {
        const index = this.payments.findIndex(
            (payment) => payment.id === response.id,
        );
        this.payments[index] = response;
        return response.id;
      }
      return false;
    },

    async get(id) {
      const response = await paymentAPI.get(id);
      if (response.success) {
        return response;
      }
      return false;
    },
  },
});
