<template>
    <OrderItem
      v-for="(order,index) in orders"
        :id="index"
        :image="order.image"
        :food_name="order.food_name"
        :order_price="order.order_price"
        :order_quantity="order.order_quantity"
        :order_request="order.order_request"
        :key="index"
        >
    </OrderItem>
  </template>

<script>
import OrderItem from './OrderItem.vue';
export default {
  data() {
    return {
      orders: [
        {
          image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          food_name: 'ข้าวมันไก่',
          order_price: '45',
          order_quantity: '3',
          order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          food_name: 'ข้าวมันไก่',
          order_price: '45',
          order_quantity: '2',
          order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          food_name: 'ข้าวมันไก่',
          order_price: '45',
          order_quantity: '1',
          order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
      ],
    };
  },
  components: {OrderItem},
};
</script>
