<template>
  <div class="block p-2 mt-4 border-2 border-gray-600 rounded-2xl" style="width:600px;height:200px;"
  v-bind:style="{'background-image': 'url(' + image + ')'}" @click="onClick">
    <p class="text-3xl text-white bottom-0">{{ section }}</p>
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
      if (this.url != '') {
        this.$router.push(this.url);
      }
    },
  },
  // props: {
  //   food: Object,
  //   url: {
  //     type: String,
  //     default: ''
  //   }
  // }
};
</script>

<style>

</style>
