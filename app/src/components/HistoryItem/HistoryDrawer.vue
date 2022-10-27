<template>
    <History
    v-for="(order, index) in orders"
    :id="index"
    :status="order.status"
    :image="order.image"
    :foodName="order.foodName"
    :foodPrice="order.foodPrice"
    :foodAmount="order.foodAmount"
    :foodDescription="order.foodDescription"
    :key="index"
    >
    </History>
</template>

<script>
import History from './HistoryItem.vue';

export default {
  data() {
    return {
      orders: [
        {
          status: 'รอทำ',
          image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          foodName: 'ข้าวมันไก่',
          foodPrice: '45',
          foodAmount: '1',
          foodDescription: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          status: 'กำลังทำ',
          image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          foodName: 'ข้าวมันไก่',
          foodPrice: '45',
          foodAmount: '1',
          foodDescription: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          status: 'ส่งถึงโต๊ะแล้ว',
          image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          foodName: 'ข้าวมันไก่',
          foodPrice: '45',
          foodAmount: '1',
          foodDescription: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
      ],
    };
  },
  components: {History},
};
</script>

