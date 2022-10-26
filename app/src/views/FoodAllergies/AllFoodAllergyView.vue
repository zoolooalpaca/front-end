<template>
  <div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase
               bg-gray-50 dark:bg-gray-700
               dark:text-gray-400">
        <tr>
          <th scope="col" class="py-3 px-6">#</th>
          <th scope="col" class="py-3 px-6">Allergy</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="foodAllergy in food_allergies" :key="foodAllergy.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="py-4 px-6">{{ foodAllergy.id }}</th>
          <td class="py-4 px-6">{{ foodAllergy.food_allergies }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {useFoodAllergyStore} from '@/stores/foodAllergy.js';

export default {
  name: 'AllFoodAllergyView',
  setup() {
    const foodAllergyStore = useFoodAllergyStore();
    return {foodAllergyStore};
  },
  data() {
    return {
      food_allergies: Array,
    };
  },
  created() {
    this.getFoodAllergies();
  },
  methods: {
    async getFoodAllergies() {
      await this.foodAllergyStore.fetch();
      this.food_allergies = this.foodAllergyStore.food_allergies;
    },
  },
  mounted() {
    console.log('Mounted');
  },
};
</script>
