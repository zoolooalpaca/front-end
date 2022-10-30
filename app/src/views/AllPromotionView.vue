<template>
  <div class="flex flex-col">
    <div class="flex flex-row">
      <top-app-bar/>
      <h1 class="text-xl float-left">{{ title }}</h1>
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
import topAppBar from "@/components/TopAppBar/TopAppBar.vue";
import PromotionBanner from "@/components/PromotionBanner/PromotionBanner.vue";
export default {
  data() {
    return{
      title: 'โปรโมชัน',
      promotions: null,
    }
  },
  components: {
    topAppBar,
    PromotionBanner
  }
}
</script>

<style>

</style>