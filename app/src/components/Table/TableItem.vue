<template>
  <button
    class="flex items-center justify-center w-28
    h-28 bg-blue-100 rounded-2xl
    focus:outline-none focus:ring focus:ring-blue-500"
    v-show="available==true"
    @click="goToOrderQrCode"
  >
    <p class="text-base font-medium tracking-wide leading-normal text-gray-900">
      {{table_id}}</p>
  </button>
  <button disabled class="flex items-center
    justify-center w-28 h-28 bg-gray-300 rounded-2xl"
    v-show="available==false"
  >
    <p class="text-base font-medium tracking-wide leading-normal text-gray-900">
      {{table_id}}
    </p>
  </button>

</template>

<!-- v-if="table.available === true" bg-blue-100 -->
<!-- v-else bg-gray-100 -->

<script>
export default {
  props: [
    'table_id', 'available',
  ],

  methods: {
    // กดเลือกโต๊ะที่ต้องการแล้วจะส่งไปยังหน้าOrderQrCodeView.vue
    goToOrderQrCode() {
      this.$router.push(`/employee/new-customer/order-qrcode`);
      // this.$router.push(`/new-customer/order-qrcode/${this.table.id}`)
    },
  },
};
</script>
