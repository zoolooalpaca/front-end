import {defineStore} from 'pinia';
import {foodAPI} from '@/services/api';

export const useFoodStore = defineStore({
  id: 'food',
  state: () => {
    return {
      foods: [],
    };
  },
  getter: {
    getFoods: (state) => state.foods,
  },
  actions: {
    async fetch() {
      this.foods = await foodAPI.getAll();
    },

    async save(food) {
      const response = await foodAPI.saveNew(food);
      if (response.success) {
        this.foods.push(response);
        return response.id;
      }
      return false;
    },

    delete(id) {
      this.foods = this.foods.filter(
          (food) => food.id !== id,
      );
    },
  },
});
