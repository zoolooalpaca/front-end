<template>
  <div class="food-tray-container">
    <button @click="getOrderItems()">fetch</button>
    <div class="space-x-4">
      <button
        v-for="tab, i in tabs"
        class="title-large"
        :class="selectedTab == i ? 'tray-tab-selected' : 'tray-tab'"
        @click="selectedTab = i"
        :key="i"
      >{{tab}}</button>
    </div>
    <div v-if="selectedTab == 1" class="space-y-2 w-full">
      <HistoryItem
        v-for="order,i in orderHistoryList"
        :status="order.order_status"
        :image="order.food_image.thumb"
        :foodName="order.food_name"
        :foodPrice="order.order_price"
        :foodAmount="order.order_quantity"
        :foodDescription="order.order_request"
        :key="i"
      />
    </div>
    <div v-if="selectedTab == 0" class="space-y-2 w-full">
      <OrderItem
        v-for="order, i in orderHistoryList"
        :order="order"
        :key="i"
      />
    </div>
  </div>
</template>

<script>
import OrderItem from './OrderItem/OrderItem.vue';
import HistoryItem from './HistoryItem/HistoryItem.vue';
import {useOrderStore} from '../stores/order.js';

export default {
  components: {OrderItem, HistoryItem},
  setup() {
    const orderStore = useOrderStore();
    return {orderStore};
  },
  data() {
    return {
      tabs: ['รายการในถาด', 'ประวัติ'],
      selectedTab: 0,
      orderList: [],
    };
  },
  created() {
    this.getOrderItems();
  },
  methods: {
    async getOrderItems() {
      await this.orderStore.fetch();
      this.orderList = this.orderStore.orders.data;
      console.log(this.orderList);
    },
  },
  computed: {
    orderHistoryList() {
      return this.orderList.reduce(
          (prev, curr) => [...prev, ...curr.order_description], []);
    },
  },
};
</script>

<style>
.food-tray-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  border: 1px solid var(--md-sys-color-outline);
  border-radius: 8px;
}
.tray-tab-selected {
  color: var(--md-sys-color-on-background);
}
.tray-tab {
  color: var(--md-sys-color-outline);
}
</style>
