<!-- eslint-disable max-len -->
<template lang="">
    <div class="cook-item-container">
        <p class="body-large secondary-text">โต๊ะ {{ tableNumber }}</p>
        <div class="flex justify-between items-center">
          <p class="headline-large">{{ foodName }}</p>
          <p class="headline-medium">x{{ foodAmount }}</p>
        </div>
        <p class="body-medium outline-text">{{ foodDescription }}</p>
        <button @click="()=>$router.push({path: '/employee/order/order-to-do/order-cooking'})" class="cook-button primary justify-center">
          <span class="on-primary-text">
            ทำ
          </span>
        </button>
    </div>
</template>

<script>
export default {
  props: [
      'id', 'tableNumber', 'foodName', 'status', 'foodAmount', 'foodDescription'
  ],
};
</script>

<style>
.cook-item-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px 29px;
  background: var(--md-sys-color-background);
  /*outline*/
  border: 1px solid var(--md-sys-color-outline);
  border-radius: 10px;
}
.cook-button {
  display: flex;
  padding: 10px 24px;
  border-radius: 100px;
}
</style>
