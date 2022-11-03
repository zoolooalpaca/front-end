<template>
  <div
    class="banner-container"
    v-bind:style="containerStyle"
    @click="onClick"
  >
    <div class="banner-backdrop"></div>
    <p class="headline-small text-white
    absolute bottom-4 left-4">{{ section }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 'https://gangtravel.com/upload/2021/12/4-4.jpg.webp',
      section: 'กุ้งเผา แถมโค้ก 1 แก้ว',
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
.banner-container {
  flex-shrink: 0;
  position: relative;
  height: 128px;
  border-radius: 16px;
  overflow: hidden;
}

@media (min-width: 640px) {
  .banner-container {
    width: 50%;
  }
}

.banner-backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,
  rgba(0, 0, 0, 0) 20%,
  rgba(0, 0, 0, 0.8) 100%);
}
</style>
