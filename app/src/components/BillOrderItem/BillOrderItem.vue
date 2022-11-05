<template>
  <div
    class="
      relative
      p-4
      rounded-3xl
      inline-flex
      space-x-4
      items-center
      headline-small
      justify-start
      overflow-hidden
    "
  >
    <div
      class="
        tertiary-container
        left-0
        w-full
        h-full
        absolute
        -z-10
        opacity-[8%]
      "
    ></div>
      <p class="leading-loose">{{ amount }}</p>
      <p class="leading-loose">x</p>
      <p class="leading-loose">{{ name }}</p>
      <p class="flex-1 leading-loose text-right">฿{{ price * amount }}</p>
      <div class="inline-flex flex-col items-center justify-center w-10">
        <div class="inline-flex items-center justify-center flex-1">
          <button class="flex items-center error-text">
            <span class="material-symbols-outlined">cancel</span>
          </button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 2,
      name: 'ชื่อสินค้า',
      price: 100,
    };
  },
};
</script>

<style>
</style>
