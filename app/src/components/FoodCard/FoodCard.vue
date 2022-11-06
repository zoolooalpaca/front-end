<!-- eslint-disable vue/no-dupe-keys -->
<template>
  <div class="food-card">
    <img :src="image" :alt="`an image of ${name}`"
      class="food-card-image">
    <div class="flex p-5 justify-between">
      <div>
        <h3 class="label-large --md-sys-color-on-primary-container">
          {{ name }}
        </h3>
        <p class="label-small --md-sys-color-on-primary">{{ price }} บาท</p>
      </div>
      <div class="items-center">
        <button class="w-8 h-8 secondary-container
        rounded-full p-1 justify-center" @click="goToMenuDetail">
          <span class="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
      'id', 'image', 'name', 'price',
  ],
  methods: {
    // กดเลือกรายการอาหารแล้วส่งไปยังหน้า DetailMenuView.vue
    goToMenuDetail() {
      this.$router.push (
          {name: 'detail-menu', params: {foodId: this.id}}
      );
    }
  },
};
</script>

<style scoped>
.food-card{
  margin-bottom: 4px;
  border-radius: 30px;
  background: var(--md-sys-color-primary-container);
}
.food-card-image{
  border-radius: 30px 30px 0px 0px;
  height: 150px;
  width: 100%;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .food-card{
    height: 300px;
    width: 100%;
    margin-bottom: 4px;
    border-radius: 30px;
    background: var(--md-sys-color-primary-container);
  }
  .food-card-image{
    border-radius: 30px 30px 0px 0px;
  }
}

@media screen and (max-width: 420px) {
  .food-card{
    height: 300px;
    width: 40%;
    margin-bottom: 4px;
    border-radius: 30px;
    background: var(--md-sys-color-primary-container);
  }
  .food-card-image{
    border-radius: 30px 30px 0px 0px;
  }
}
</style>
