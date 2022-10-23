import {defineStore} from 'pinia';
import {foodAllergyAPI} from '@/services/api.js';

export const useFoodAllergyStore = defineStore({
  id: 'food_allergies',
  state: () => {
    return {
      food_allergies: [],
    };
  },
  getter: {
    getFoodAllergies: (state) => state.food_allergies,
  },
  actions: {
    async fetch() {
      this.food_allergies = await foodAllergyAPI.getAll();
    },

    async save(foodAllergy) {
      const response = await foodAllergyAPI.saveNew(foodAllergy);
      if (response.success) {
        this.foodAllergies.push(response);
        return response.id;
      }
      return false;
    },

    delete(id) {
      this.food_allergies = this.foodAllergies.filter(
          (foodAllergy) => foodAllergy.id !== id,
      );
    },
  },
});
