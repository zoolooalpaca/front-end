<template>
  <div>
    <button
        class="w-8 h-8 secondary-container rounded-full p-1 justify-center"
        @click="backToMenu">
              <span class="material-symbols-outlined">
                arrow_back
              </span>
    </button>
    <div class="text-center mt-5">
      <span class="text-4xl set-margin">
        ทางร้านได้รับคำแนะนำของท่านแล้ว
      </span>
    </div>

    <span class="set-span-to-center text-xl set-margin">
      ขอบคุณที่ใช้บริการค่ะ/ครับ
    </span>

    <div class="flex justify-center set-margin">
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
    backToMenu() {
      this.$router.push(`/`)
    }
  }
}
</script>

<style>
.set-margin {
  margin-top: 20px;
  margin-bottom: 20px;
}
.set-span-to-center {
  display: flex;
  justify-content: center;
}
</style>