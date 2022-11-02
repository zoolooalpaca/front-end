<template>
    <div class="relative">
        <div>
            <TopAppBar label="ประวัติ"></TopAppBar>
        </div>
        <div class="py-8">
            <HistoryItem
                v-for="(order,index) in orders"
                :id="index"
                :status="order.status"
                :image="order.image"
                :food_name="order.food_name"
                :order_price="order.order_price"
                :order_quantity="order.order_quantity"
                :order_request="order.order_request"
                :key="index"
                >
            </HistoryItem>
        </div>
        <div class="fixed left-0 bottom-0 w-full p-4">
            <FloatingHistoryOrder class="mx-10"
                :total="totalItem"
                :tprice="totalPrice"
            />
        </div>
    </div>
</template>

<script>
import FloatingHistoryOrder from '../../components/FloatingHistoryOrder.vue';
import HistoryItem from '../../components/HistoryItem/HistoryItem.vue';
import TopAppBar from '../../components/TopAppBar/TopAppBar.vue';

export default {
  components:
    {
      TopAppBar,
      HistoryItem,
      FloatingHistoryOrder,
    },

  data() {
    return {
      orders: [
        {
          status: 'รอทำ',
          image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          food_name: 'ข้าวมันไก่',
          order_price: 45,
          order_quantity: 1,
          order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          status: 'กำลังทำ',
          image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          food_name: 'ข้าวมันไก่',
          order_price: 45,
          order_quantity: 2,
          order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          status: 'ส่งถึงโต๊ะแล้ว',
          image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          food_name: 'ข้าวมันไก่',
          order_price: 45,
          order_quantity: 3,
          order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
      ],
    };
  },
  computed: {
    totalItem() {
      return this.orders.length;
    },
    totalPrice() {
      return this.orders.reduce((prev, {order_price}) => prev + order_price, 0);
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
