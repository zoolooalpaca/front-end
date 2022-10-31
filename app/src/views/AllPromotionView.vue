<template>
  <div class="flex flex-col">
    <div class="flex flex-row">
      <TopAppBar label="โปรโมชัน"></TopAppBar>
    </div>

    <div class="mt-5 mb-5 items-center">
      <PromotionBanner>
      </PromotionBanner>
      <PromotionBanner v-for="promotion in promotions" :key="promotion.id"
                         :promotion="{...promotion}" :url="`promotions/${promotion.id}`"/>
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
    }
  },
  components: {
    TopAppBar,
    PromotionBanner,
  }
}
</script>

<style>
.side-nav{
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left:auto;
  background-color: #111;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
}
</style>