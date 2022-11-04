<template>
 <div class="order-item-container rounded-lg flex justify-between">
  <div class="flex">
    <div>
      <img class="order-image" :src="order.food_image.thumb" alt="">
    </div>

    <div class='mx-5 flex flex-col'>
        <span class='headline-small'>{{order.food_name}}</span>
        <span class='body-large'>{{order.order_price}} บาท</span>
        <span class='body-small'>x{{order.order_quantity}}</span>
        <span class='body-medium'>{{order.order_}}</span>
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
  props: ['order'],
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
