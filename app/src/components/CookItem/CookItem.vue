<template lang="">
    <div>
        <p class="text-xl secondary-text">{{ tableNumber }}</p>
        <h1 class="text-6xl mt-4">{{ foodName }} x{{ foodAmount }}</h1>
        <h3 class="mt-4 tertiary-text">{{ foodDescription }}</h3>
        <button class="mt-4 text-white button">ทำ</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tableNumber: 'โต๊ะ 1',
      foodName: 'ส้มตำไข่เค็ม',
      foodDescription: 'ส้มตำไข่เค็มอร่อยยั่ว ๆ ถูกปากคนไทย',
      foodAmount: '2',
    };
  },
};
</script>

<style>
.button {
  display: flex;
  padding: 5px 225px;
  border-radius: 100px;
  width: 500px;
  background: var(--md-sys-color-primary);
}
</style>
