import {defineStore} from 'pinia';
import {reviewAPI} from '@/services/api.js';

export const useReviewStore = defineStore({
  id: 'review',
  state: () => {
    return {
      reviews: [],
    };
  },
  getters: {
    getReviews: (state) => state.reviews,
  },
  actions: {
    async fetch() {
      this.reviews = await reviewAPI.getAll();
    },

    async save(review) {
      const response = await reviewAPI.saveNew(review);
      if (response.success) {
        this.reviews.push(response);
        return response.id;
      }
      return false;
    },

    delete(id) {
      this.reviews = this.reviews.filter(
          (review) => review.id !== id,
      );
    },

    async update(review) {
      const response = await reviewAPI.update(review);
      if (response.success) {
        const index = this.reviews.findIndex(
            (r) => r.id === review.id,
        );
        this.reviews[index] = review;
      }
    },

    async get(id) {
      const response = await reviewAPI.get(id);
      if (response.success) {
        return response;
      }
      return false;
    },
  },
});
