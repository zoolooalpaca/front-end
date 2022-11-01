<template>
  <HistoryItem
    v-for="(order,index) in orders"
      :id="index"
      :status="order.status"
      :image="order.image"
      :food_name="order.food_name"
      :food_price="order.food_price"
      :order_quantity="order.order_quantity"
      :order_request="order.order_request"
      :key="index"
      >
  </HistoryItem>
</template>

<script>
import HistoryItem from './HistoryItem.vue';
export default {
data() {
  return {
    orders: [
      {
        status: 'รอทำ',
        image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
        food_name: 'ข้าวมันไก่',
        food_price: '45',
        order_quantity: '1',
        order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
      },
      {
        status: 'กำลังทำ',
        image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
        food_name: 'ข้าวมันไก่',
        food_price: '45',
        order_quantity: '2',
        order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
      },
      {
        status: 'ส่งถึงโต๊ะแล้ว',
        image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
        food_name: 'ข้าวมันไก่',
        food_price: '45',
        order_quantity: '3',
        order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
      },
    ],
  };
},
components: {HistoryItem},
};
</script>