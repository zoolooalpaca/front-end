import { defineStore } from 'pinia';
import { foodAllergyAPI } from '@/services/api.js';

export const useFoodAllergyStore = defineStore({
    id: 'foodAllergy',
    state: () => {
        return {
            foodAllergies: [],
        };
    },
    getter: {
        getFoodAllergies: (state) => state.foodAllergies,
    },
    actions: {
        async fetch() {
            this.foodAllergies = await foodAllergyAPI.getAll();
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
            this.foodAllergies = this.foodAllergies.filter(
                (foodAllergy) => foodAllergy.id !== id,
            );
        }
    },
});