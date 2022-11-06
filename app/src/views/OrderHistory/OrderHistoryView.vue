<template>
    <div class="relative">
        <div>
            <TopAppBar label="ประวัติ"></TopAppBar>
        </div>
        <div class="py-8">
            <HistoryItem
            v-for="order,i in orderHistoryList"
            :id="order.id"
            :status="order.order_status"
            :foodImage="order.food_image.thumb"
            :foodName="order.food_name"
            :orderPrice="order.order_price"
            :orderQuantity="order.order_quantity"
            :orderRequest="order.order_request"
            :onRemoveOrder="onRemoveOrder"
            :key="i"
                >
            </HistoryItem>
        </div>
        <div class="fixed left-0 bottom-0 w-full p-4">
            <FloatingHistoryOrder class="mx-10"
                :totalOrder="orderItemCount"
                :tprice="totalOrderPrice"
            />
        </div>
    </div>
</template>

<script>
import FloatingHistoryOrder from '../../components/FloatingHistoryOrder.vue';
import HistoryItem from '../../components/HistoryItem/HistoryItem.vue';
import TopAppBar from '../../components/TopAppBar/TopAppBar.vue';
import { useOrderStore } from '../../stores/order';

export default {
  components:
  {
    TopAppBar,
    HistoryItem,
    FloatingHistoryOrder,
  },

  setup(){
    const orderStore = useOrderStore();
    return {orderStore};
  },

  data() {
    return {
      orderedItems: [],
    };
  },

  created() {
    this.getOrderItems();
  },

  methods:{
    async getOrderItems() {
      await this.orderStore.fetch();
      this.orderedItems = this.orderStore.orders.data;
      console.log(this.orderedItems)
    },
    onRemoveOrder() {
      this.orderedItems = this.orderStore.orders.data;
    }
  },

  computed: {
    orderHistoryList() {
      const orderHistory = this.orderedItems.reduce(
          (prev, curr) => [...prev, ...curr.order_description], []);
      return orderHistory;
    },

    orderItemCount() {
      return this.orderedItems.reduce(
        (prev, curr) =>
          prev + (curr.order_description
          ? curr.order_description.length
          : 0), 0)
    },

    totalOrderPrice() {
      return this.orderedItems.reduce((prev, curr) => {
          return prev + (curr.order_description
          ? curr.order_description.reduce(
            (prev, curr) => prev + (curr.order_price * curr.order_quantity), 0)
          : 0
        )}, 0)
    },
  },
    
};

</script>

<style>
.cancel-button {
    width: 90px;
    height: 40px;
    background: var( --md-sys-color-error);
    color: var( --md-sys-color-on-primary);

    /* outline */
    border-radius: 100px;
}
</style>
