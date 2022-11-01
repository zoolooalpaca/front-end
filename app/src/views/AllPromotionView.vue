<template>
  <div class="flex flex-col">
    <div class="flex flex-row">
      <button
          class="w-8 h-8 secondary-container rounded-full p-1 justify-center"
          @click="backToMenu">
              <span class="material-symbols-outlined">
                arrow_back
              </span>
      </button>
      <h3 class="text-style ml-5 text-xl">{{ title }}</h3>
    </div>

    <div v-for="(item, index) in promotionBannerItem" :key="index">
      <PromotionBanner class="mt-3"
                       :id="index"
                       :image="item.image"
                       :name="item.name"
                       :active="index == activeId">
      </PromotionBanner>
    </div>

  </div>
</template>

<script>
import TopAppBar from "@/components/TopAppBar/TopAppBar.vue";
import PromotionBanner from "@/components/PromotionBanner/PromotionBanner.vue";
export default {
  data() {
    return{
      title: 'โปรโมชัน',
      promotions: null,
      activeId: 0,
      loopCount: 3,
      promotionBannerItem: [
          {image: 'https://cpfmshop.com//uploads/283/product/949381e47baff4b832cb40683878b6ce_full.jpg',
            name: 'ข้าวมันไก่'},
          {image: 'https://img.wongnai.com/p/1920x0/2017/06/26/16b349df2d5b471bbca679e6117f1544.jpg',
            name: 'ข้าวขาหมู'},
          {image: 'https://food.mthai.com/app/uploads/2017/05/Noodles-with-coconut-milk.jpg',
            name: 'ขนมจีน'},]
    }
  },
  components: {
    TopAppBar,
    PromotionBanner,
  },
  methods: {
    backToMenu() {
      this.$router.push(`/`)
    }
  }
}
</script>

<style>
.text-style {
  font-weight: bold;
}

.display-promotion {
  display: grid;
}
</style>