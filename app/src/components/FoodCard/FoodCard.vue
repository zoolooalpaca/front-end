<template>
  <div class="food-card">
    <img :src="image" alt="image.jpg"
      class="rounded food-card-image" height="150">
    <div class="flex p-5 justify-between">
      <div>
        <h3 class="label-large --md-sys-color-on-primary-container">
          {{ name }}
        </h3>
        <p class="label-small --md-sys-color-on-primary">{{ price }} บาท</p>
      </div>
      <div class="items-center">
        <button class="w-8 h-8 secondary-container
        rounded-full p-1 justify-center">
          <span class="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // image : "image/image_khaomankai.jpg",
      image: 'https://img.wongnai.com/p/1920x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg',
      name: 'ข้าวมันไก่',
      price: 65,
    };
  },
  // eslint-disable-next-line vue/no-dupe-keys
  props: ['image', 'name', 'price'],
  methods: {
    onClickAdd() {},
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
  position: relative;
  height: 150px;
  width: 250px;
  border-radius: 30px 30px 0px 0px;
}

</style>
