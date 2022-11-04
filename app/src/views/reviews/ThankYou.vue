<template>
  <div>
    <button @click="goBack">
      <span class="material-symbols-outlined border rounded-full bg-[#FFDCC4]">
              arrow_back
      </span>
    </button>
    <div>
      <h1 class="text-center text-4xl mb-5 mt-5">
        ทางร้านได้รับคำแนะนำของท่านแล้ว
      </h1>
    </div>

    <h3 class="text-center text-xl mb-5 mt-5">
      ขอบคุณที่ใช้บริการค่ะ/ครับ
    </h3>

    <div class="flex justify-center mt-5 mb-5">
      <img :src="image">
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      image: 'https://i.pinimg.com/236x/f2/e6/c7/f2e6c7b0e07d8644ca7e68c8a17ae1c4.jpg',
    }
  },
  methods: {
    goBack () {
      return this.$router.go(-1)
    }
  }
}
</script>

<style>
.bg-fireworks{
  background-image: url("https://png.pngtree.com/element_our/20200630/ourlarge/pngtree-yellow-firework-firework-png-free-illustration-image_2274855.jpg");
  height: 100px;
  width: 350px;
}
</style>