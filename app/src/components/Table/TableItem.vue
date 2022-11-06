<template>
  <button
    class="flex items-center justify-center w-28
    h-28 bg-blue-100 rounded-2xl
    focus:outline-none focus:ring focus:ring-blue-500"
    v-show="available==true"
    @click="goToMenuQrCode"
  >
    <p class="text-base font-medium tracking-wide leading-normal text-gray-900">
      {{table_number}}</p>
  </button>

  <button disabled class="flex items-center
    justify-center w-28 h-28 bg-gray-300 rounded-2xl"
    v-show="available==false"
  >
    <p class="text-base font-medium tracking-wide leading-normal text-gray-900">
      {{table_number}}
    </p>
  </button>

</template>

<!-- v-if="table.available === true" bg-blue-100 -->
<!-- v-else bg-gray-100 -->

<script>
export default {
  props: [
    'table_id', 'table_number', 'available',
  ],

  methods: {
    // กดเลือกโต๊ะที่ต้องการแล้วจะส่งไปยังหน้าOrderQrCodeView.vue
    goToMenuQrCode() {
      this.$router.push(
        {name: 'order-qrcode', query: {table_id: this.table_id, table_number: this.table_number}}
        );
    },
  },
};
</script>
