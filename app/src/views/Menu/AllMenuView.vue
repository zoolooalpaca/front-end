<template lang=''>
    <div class="w-full">
      <div>
        <h1 class='display-large justify-start text-center'>อร่อยโภชนา</h1>
      </div>

      <div>
        <div class='flex gap-5'>
            <BannerCard
              v-for="(promotion, index) in promotions"
              :id="index"
              :image="promotion.image"
              :section="promotion.section"
              :key="index"
            >
            </BannerCard>
        </div>
      </div>
      <div class="flex relative">
            <div>
              <FoodCategoryChip
                 v-for="(chip, index) in chips"
                 :id="index"
                 :image="chip.image"
                 :name="chip.name"
                 :key="index"
              >
              </FoodCategoryChip>
            </div>

          <div class="flex justify-between w-full gap-4">
            <div class="grid grid-cols-2 gap-2 md:w-1/2 lg:w-2/3">
              <FoodCard
                v-for="(food, index) in foods"
                :id="index"
                :image="food.images.thumb"
                :name="food.food_name"
                :price="food.food_price"
                :key="index"
              />
            </div>
            <div
              class="w-1/2 lg:w-1/3 hidden md:block
              h-screen overflow-hidden sticky top-0"
            >
              <FoodTray/>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import FoodCard from '../../components/FoodCard/FoodCard.vue';
import BannerCard from '../../components/BannerCard.vue';
import FoodTray from
  '../../components/FoodTray.vue';
import FoodCategoryChip from
  '../../components/FoodCategoryChip/FoodCategoryChip.vue';
import {useFoodStore} from '../../stores/food';

export default {
  setup() {
    const foodStore = useFoodStore();
    return {foodStore};
  },

  created() {
    this.fetchOrder();
  },

  components: {
    FoodCard,
    BannerCard,
    FoodCategoryChip,
    FoodTray,
  },
  data() {
    return {
      promotions: [],
      chips: [],
      foods: [],
      number: 1,
    };
  },
  methods: {
    async fetchOrder() {
      await this.foodStore.fetch();
      this.foods = this.foodStore.foods.data;
    },
  },
};
</script>

<style>
</style>

