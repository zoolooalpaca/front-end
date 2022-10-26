<template>
  <div
      class="food-category-chip-container"
      v-bind:style="containerStyle"
      @click="onClick"
      >
    <div
      class="mask food-category-chip-container p-5 food-category-chip-backdrop"
    >
      <div class="d-flex justify-content-center align-items-center">
        <p class="title-large text-center text-black">{{ name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 'https://img.wongnai.com/p/1920x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg',
      name: 'อาหารไทย',
    };
  },
  methods: {
    onClick() {
    },
  },

  computed: {
    containerStyle() {
      return {
        'background-image': 'url(' + this.image + ')',
        'background-repeat': 'none',
        'background-size': 'cover',
        'background-position': 'center',
      };
    },
  },
};
</script>

<style>
.food-category-chip-container{
  position: relative;
  height: 80px;
  overflow: hidden;
  border-radius: 20px;
}
.food-category-chip-backdrop{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 220, 196, 0.5);
}
</style>
