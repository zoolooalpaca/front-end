<template>
  <div
      class="bg-image"
      style="
      background-image: url('https://img.wongnai.com/p/1920x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg');
      border-radius: 20px;">
    <div class="mask food-category-chip p-5" style="background-color: rgba(0, 0, 0, 0.5);">
      <div class="d-flex justify-content-center align-items-center">
        <p class="title-large text-center text-white">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      image : "https://img.wongnai.com/p/1920x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg",
      text : "โปรโมชัน"
    }
  },
  methods : {

  }
}
</script>

<style>
.food-category-chip{
  border-radius: 20px;
}
</style>