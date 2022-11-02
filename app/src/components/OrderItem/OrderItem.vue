<!-- eslint-disable max-len -->
<template>
 <div class="order-item-container rounded-lg mt-3 p-4 flex justify-between">
  <div class="flex">
    <div>
      <img class="order-image" :src="image" alt="">
    </div>

    <div class='mx-5 flex flex-col'>
        <span class='headline-small'>{{food_name}}</span>
        <span class='body-large'>{{order_price}} บาท</span>
        <span class='body-small'>x{{order_quantity}}</span>
        <span class='body-medium'>{{order_request}}</span>
    </div>
  </div>
  <div class="flex items-center">
      <button 
        @click=""
        class="error-container error-text w-10 h-10 rounded-full">
        <div class="flex items-center justify-center">
          <span class="material-symbols-outlined">close</span>
        </div>
      </button>
  </div>
 </div>
</template>

<script>
export default {
  props: [
    'id', 'image', 'food_name',
    'order_price', 'order_quantity', 'order_request',
    'showDeleteDialog'
  ],
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
