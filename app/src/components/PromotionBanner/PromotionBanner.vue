<template>
  <div
      class="promotion-container"
      v-bind:style="containerStyle"
      @click="onClick"
  >
    <div class="mask promotion-container p-5 transbox-promotion">
        <p class="title-large text-form-promotion">{{ name }}</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 'https://img.wongnai.com/p/1920x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg',
      name: 'โปรโมชัน',
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
.promotion-container{
  position: relative;
  height: 80px;
  overflow: hidden;
  border-radius: 20px;
}
.transbox-promotion {
  position: absolute;
  align-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
}
.text-form-promotion{
  text-align: center;
  font-weight: bold;
  color: #FFFFFF;
}
</style>
