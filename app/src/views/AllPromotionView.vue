<template>
  <div class="flex flex-col">
    <div class="flex flex-row">
      <button
          class="w-8 h-8 secondary-container rounded-full p-1 justify-center"
          @click="goBack">
              <span class="material-symbols-outlined">
                arrow_back
              </span>
      </button>
      <h3 class="text-style ml-5 text-xl">{{ title }}</h3>
    </div>

    <PromotionBanner v-for="promotion in promotions" :key="promotion.id"
                     :promotion="promotion" :url="`promotions/${promotion.id}`"
    class="mt-2 mb-2">
    </PromotionBanner>
  </div>
</template>

<script>
import PromotionBanner from '@/components/PromotionBanner/PromotionBanner.vue';
import {usePromotionStore} from "../stores/promotion";
export default {
  setup() {
    const promotionStore = usePromotionStore()
    return { promotionStore }
  },
  created() {
    this.fetchPromotion();
  },
  data() {
    return {
      title: 'โปรโมชัน',
      promotions: null,
      activeId: 0,
    };
  },
  components: {
    PromotionBanner
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async fetchPromotion() {
      await this.promotionStore.fetch()
      this.promotions = this.promotionStore.promotions.data;
      console.log(this.promotions)
    }
  },
};
</script>

<style>
.text-style {
  font-weight: bold;
}

.display-promotion {
  display: grid;
}
</style>
