<template>
    <CookItem
      v-for="(order, index) in orders"
      :id="index"
      :tableNumber="order.tableNumber"
      :foodName="order.foodName"
      :foodAmount="order.foodAmount"
      :foodDescription="order.foodDescription"
      :key="index"
    >
    </CookItem>
</template>

<script>
import CookItem from './CookItem.vue';

export default {
  data() {
    return {
      orders: [
        {
          tableNumber: '1',
          foodName: 'ข้าวผัดหมู',
          foodAmount: '2',
          foodDescription: 'ข้าวผัดหมูไม่ใส่น้ำมัน แล้วนายคนนั้นคือใครกัน',
        },
        {
          tableNumber: '2',
          foodName: 'ข้าวมันไก่',
          foodAmount: '1',
          foodDescription: 'ข้าวมันไก่ ดีอะ ดีอะ ดีอะ',
        },
        {
          tableNumber: '3',
          foodName: 'ข้าวไปในใจเธอ',
          foodAmount: '5',
          foodDescription: 'ยากจัง เข้าไม่ได้',
        },
      ],
    };
  },
  components: {CookItem},
};
</script>

