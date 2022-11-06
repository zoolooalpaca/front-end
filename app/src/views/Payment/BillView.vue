<template>
<div>
  <h1 class="text-center text-xl">{{ nameShop }}</h1>
  <span>{{ tableNumber }}</span>

  <BillOrderItem v-for="order in orders" :key="order.id"
                   :order = "order" :url="`orders/${order.id}`"></BillOrderItem>

</div>
</template>

<script>
import BillOrderItem from "@/components/BillOrderItem/BillOrderItem";
import { useOrderStore } from "../../stores/order";

export default {
  setup(){
    const orderStore = useOrderStore()
    return { orderStore }
  },
  components: {
    BillOrderItem
  },
  data() {
    return {
      nameShop: 'อร่อยโภชนา',
      tableNumber: '3',
      orders: null
    };
  },
  created() {
    this.fetchOrder();
  },
  methods: {
    async fetchOrder() {
      await this.orderStore.fetch()
      this.orders = this.orderStore.orders.data;
      console.log(this.orders)
    }
  }
};
</script>

<style>

</style>
