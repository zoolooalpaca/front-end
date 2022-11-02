<template>
  <div v-show="status == 'ยังไม่เสิร์ฟ'"
      class="flex items-center gap-4 mt-2 p-3">
    <div class="table-circle primary on-primary-text">
      <span>
        โต๊ะ {{ table_id }}
      </span>
    </div>
    <div class="flex flex-1
      self-stretch items-center
      p-4 rounded-xl
      primary-container on-primary-container-text"
    >
    <div class="flex-1 self-stretch">
      <h3 class="body-medium">รายการอาหาร</h3>
      <div class="order-detail">
        <p
          v-for="order in orders"
          :key="index"
          class="body-large"
        >
          {{ order.order }} x{{ order.quantity }}
        </p>
      </div>
    </div>
    <div class="items-center">
      <button
        @click="serveDone"
        class="
          icon
          secondary-container
          on-secondary-container-text
          justify-center
        "
      >
        <span class="material-symbols-outlined"> done </span>
      </button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: [
    'id', 'status', 'table_id', 'orders',
  ],
  methods: {
    serveDone() {

    },
  },
};
</script>

<style>
.color-block {
  padding: 30px;
  background: gainsboro;
}
.table-circle {
  width: 150px;
  height: 150px;
  line-height: 50px;
  border-radius: 50%;
  font-size: 20px;
  text-align: center;
  vertical-align: baseline;
  line-height: 7.5;
}

.icon {
  float: right;
  padding: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.order-detail {
  display: block;
  padding-left: 16px;
}
.order-detail >  p {
  padding-top: 4px;
}
</style>
