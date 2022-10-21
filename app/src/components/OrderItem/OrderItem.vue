<!-- eslint-disable max-len -->
<template>
 <div class="color-block rounded border-radius-8px flex justify-between">
  <div class="flex">
    <div class="rounded border-radius-8px overflow-hidden" >
      <img :src="image" alt="ข้าวมันไก่.jpg" height="50" width="70">
    </div>

    <div class='mx-5 flex flex-col'>
        <span class='body-large'>{{foodName}}</span>
        <span class='body-large'>{{foodPrice}} บาท</span>
        <span class='label-medium'>x{{foodAmount}}</span>
        <span class='body-large'>{{foodDescription}}</span>
    </div>
  </div>

    <div class="items-center">
      <button class="secondary-container w-10 h-10 rounded-full justify-center mt-5">
        <span class="material-symbols-outlined error-text">
          close
        </span>
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
.color-block {
    padding: 30px;
    background: var(--md-sys-color-surface-variant-light);
}
</style>
