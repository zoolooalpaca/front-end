<template>
    <OrderItem
      v-for="(order,index) in orders"
        :id="index"
        :image="order.image"
        :foodName="order.foodName"
        :foodPrice="order.foodPrice"
        :foodAmount="order.foodAmount"
        :foodDescription="order.foodDescription"
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
          foodName: 'ข้าวมันไก่',
          foodPrice: '45',
          foodAmount: '1',
          foodDescription: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          foodName: 'ข้าวมันไก่',
          foodPrice: '45',
          foodAmount: '1',
          foodDescription: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          foodName: 'ข้าวมันไก่',
          foodPrice: '45',
          foodAmount: '1',
          foodDescription: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
      ],
    };
  },
  components: {OrderItem},
  };
  </script>