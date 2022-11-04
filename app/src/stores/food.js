import {defineStore} from 'pinia';
import {foodAPI} from '@/services/api';

export const useFoodStore = defineStore({
  id: 'food',
  state: () => {
    return {foods: []};
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

    async update(food) {
      const response = await foodAPI.update(food);
      if (response.success) {
        const index = this.foods.findIndex(
            (food) => food.id === response.id,
        );
        this.foods[index] = response;
        return response.id;
      }
      return false;
    },

    async get(id) {
      const response = await foodAPI.get(id);
      if (response.success) {
        return response;
      }
      return false;
    },
  },
});
