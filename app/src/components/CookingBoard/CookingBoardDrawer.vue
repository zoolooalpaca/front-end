<template>
    <CookingBoard
      v-for="(order, index) in orders"
      :id="index"
      :tableNumber="order.tableNumber"
      :foodName="order.foodName"
      :foodDescription="order.foodDescription"
      :key="index"
    >
    </CookingBoard>
</template>

<script>
import CookingBoard from './CookingBoard.vue';

export default {
  data() {
    return {
      orders: [
        {
          tableNumber: '1',
          foodName: 'ข้าวผัดหมู',
          foodDescription: 'ข้าวผัดหมูไม่ใส่น้ำมัน แล้วนายคนนั้นคือใครกัน',
        },
        {
          tableNumber: '2',
          foodName: 'ข้าวมันไก่',
          foodDescription: 'ข้าวมันไก่ ดีอะ ดีอะ ดีอะ',
        },
        {
          tableNumber: '3',
          foodName: 'ข้าวไปในใจเธอ',
          foodDescription: 'ยากจัง เข้าไม่ได้',
        },
      ],
    };
  },
  components: {CookingBoard},
};
</script>

