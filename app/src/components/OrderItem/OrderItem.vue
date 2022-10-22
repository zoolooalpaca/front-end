<!-- eslint-disable max-len -->
<template>
 <div class="order-item-container rounded-lg flex justify-between">
  <div class="flex">
    <div>
      <img class="order-image" :src="image" alt="">
    </div>

    <div class='mx-5 flex flex-col'>
        <span class='headline-small'>{{foodName}}</span>
        <span class='body-large'>{{foodPrice}} บาท</span>
        <span class='body-small'>x{{foodAmount}}</span>
        <span class='body-medium'>{{foodDescription}}</span>
    </div>
  </div>
  <div class="flex items-center">
      <button class="error-container error-text w-10 h-10 rounded-full">
        <div class="flex items-center justify-center">
          <span class="material-symbols-outlined">close</span>
        </div>
      </button>
  </div>

 </div>
</template>

<script>
export default {
  data() {
    return {
      image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
      foodName: 'ข้าวมันไก่',
      foodPrice: '45',
      foodAmount: 1,
      foodDescription: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
    };
  },
};
</script>

<style>
.order-item-container {
  padding: 16px;
  background: var(--md-sys-color-surface-variant);
  color: var(--md-sys-color-on-surface-variant)
}
.order-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
