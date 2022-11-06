<template>
  <div class="overflow-x-auto relative">

      <div>
          <TopAppBar label="ประวัติ"></TopAppBar>
      </div>

      <div class="py-8">
          <HistoryItem
          v-for="order in orders"
          :key="order.id"
          :status="order.status"
          :foodImage="order.food_image"
          :foodName="order.food_name"
          :orderPrice="order.food_price"
          :orderQuantity="order.order_quantity"
          :orderRequest="order.order_request"
          :onRemoveOrder="onRemoveOrder">
          <h1>{{order.id}}</h1>
          </HistoryItem>
      </div>

      

      <div class="fixed left-0 bottom-0 w-full p-4">
          <FloatingHistoryOrder class="mx-10" 
              :totalOrder="orderItemCount"
              :tprice="totalOrderPrice">
          </FloatingHistoryOrder>
      </div>

  </div>
</template>

<script>
// import axios from 'axios';
import {useOrderStore} from '@/stores/order.js';
import HistoryItem from '../../components/HistoryItem/HistoryItem.vue';
import TopAppBar from '../../components/TopAppBar/TopAppBar.vue';
import FloatingHistoryOrder from '../../components/FloatingHistoryOrder.vue';

export default {
  components:
{
  TopAppBar,
  HistoryItem,
  FloatingHistoryOrder,
},

  name: 'AllOrderView',
  setup() {
    const orderStore = useOrderStore();
    return {orderStore};
  },
  data() {
    return {
      orders: [{
          status: 'รอทำ',
          food_image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          food_name: 'ข้าวมันไก่',
          food_price: '45',
          order_quantity: '1',
          order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          status: 'กำลังทำ',
          food_image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          food_name: 'ข้าวมันไก่',
          food_price: '45',
          order_quantity: '2',
          order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          status: 'ส่งถึงโต๊ะแล้ว',
          food_image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          food_name: 'ข้าวมันไก่',
          food_price: '45',
          order_quantity: '3',
          order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },],
    };
  },

  methods: {
    async getOrders() {
      await this.orderStore.fetch();
      this.orders = this.orderStore.orders.data;
    }, 
    onRemoveOrder(id) {
      this.orders = this.orders.filter((order) => order.id !== id);
    },
  },

  // คำนวณจำนวนรายการที่สั่ง
  computed: {
    orderItemCount() {
      let count = [];
      this.orders.forEach((order) => {
        count += order.order_quantity
      });
      if (count == 0) {
        return 0;
      } else {
        return count[count.length - 1];
      }
    },
    // คำนวณราคารวม
    totalOrderPrice() {
      let price = 0;
      this.orders.forEach((order) => {
        price += order.food_price * order.order_quantity;
      });
      return price;
    },
  },

  mounted() {
    console.log('Order List Component Mounted');
  },
  
};
</script>
