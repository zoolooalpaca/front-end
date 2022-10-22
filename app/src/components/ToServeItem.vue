<template>
  <div class="flex items-center gap-4">
    <div class="table-circle primary on-primary-text">
      <span>
        {{ table }}
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
          :key="order.id"
          class="body-large"
        >
          {{ order.order }} x{{ order.amount }}
        </p>
      </div>
    </div>
    <div class="items-center">
      <button
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
  data() {
    return {
      table: 'โต๊ะ 1',
      orders: [
        {
          id: 1,
          order: 'ข้าวไข่เจียว',
          amount: 2,
        },
        {
          id: 2,
          order: 'กะเพราหมูไข่ดาว',
          amount: 1,
        },
        {
          id: 3,
          order: 'กะเพราหมูดาว',
          amount: 1,
        },
        {
          id: 4,
          order: 'ไข่ดาว',
          amount: 1,
        },
        {
          id: 5,
          order: 'กะเพราดาว',
          amount: 1,
        },
        {
          id: 6,
          order: 'กะเพราหมูไข่',
          amount: 1,
        },
      ],
    };
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
