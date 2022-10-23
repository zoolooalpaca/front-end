import {defineStore} from 'pinia';
import {ratingAPI} from '@/services/api.js';

export const useRatingStore = defineStore({
  id: 'rating',
  state: () => {
    return {
      ratings: [],
    };
  },
  getters: {
    getRatings: (state) => state.ratings,
  },

  actions: {
    async fetch() {
      this.ratings = await ratingAPI.getAll();
    },

    async save(rating) {
      const response = await ratingAPI.saveNew(rating);
      if (response.success) {
        this.ratings.push(response);
        return response.id;
      }
      return false;
    },

    delete(id) {
      this.ratings = this.ratings.filter(
          (rating) => rating.id !== id,
      );
    },

    async update(rating) {
      const response = await ratingAPI.update(rating);
      if (response.success) {
        const index = this.ratings.findIndex(
            (r) => r.id === rating.id,
        );
        this.ratings[index] = rating;
      }
    },

    async get(id) {
      const response = await ratingAPI.get(id);
      if (response.success) {
        return response;
      }
      return false;
    },
  },
});
