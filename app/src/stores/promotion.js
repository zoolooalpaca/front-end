import {defineStore} from 'pinia';
import {promotionAPI} from '@/services/api.js';

export const usePromotionStore = defineStore({
  id: 'promotion',
  state: () => {
    return {
      promotions: [],
    };
  },
  getters: {
    getPromotions: (state) => state.promotions,
  },
  actions: {
    async fetch() {
      this.promotions = await promotionAPI.getAll();
    },

    async save(promotion) {
      const response = await promotionAPI.saveNew(promotion);
      if (response.success) {
        this.promotions.push(response);
        return response.id;
      }
      return false;
    },

    delete(id) {
      this.promotions = this.promotions.filter(
          (promotion) => promotion.id !== id,
      );
    },

    async update(promotion) {
      const response = await promotionAPI.update(promotion);
      if (response.success) {
        const index = this.promotions.findIndex(
            (p) => p.id === promotion.id,
        );
        this.promotions[index] = promotion;
      }
    },

    async get(id) {
      const response = await promotionAPI.get(id);
      if (response.success) {
        return response;
      }
      return false;
    },
  },
});
