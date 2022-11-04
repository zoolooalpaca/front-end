<!-- /TODO:
  ใช้ข้อมูล
  order description(ที่สั่งแล้ว): 
  -order id
  -order_status = 'รอทำ', 'กำลังทำ', 'ส่งถึงโต๊ะแล้ว'
  -food id > food name food image
  -price(ราคารวมอาหารที่สั่งในorderนั้นทั้งหมด foodprice*quantity ??)
  -quantity
  -request

  computed:
  totalOrder = จำนวนรายการorderทั้งหมดที่customerสั่ง
  totalprice = ราคารวมทุกorderที่สั่ง ไม่รวมที่ยกเลิกไปแล้ว
  //ขึ้นที่แถบfloatinghistoryorder

  methods:
  อยู่ในcomponents
  - TopAppBar.vue > goBack() = ย้อนกลับไปหน้าที่แล้ว
  - HistoryItem.vue 
    (DeletePopup ใน OrderConfirmDeletePopup = กดปุ่มแล้วแสดง popup ให้ confirm delete)
      > deleteHistoryOrder() = กดปุ่ม'ยกเลิกอาหาร'เพื่อยืนยันแล้วลบorderที่ได้สั่งไปแล้วแต่ยังอยู่ใน order_status 'รอทำ'
  / -->
<template>
    <div class="relative">
        <div>
            <TopAppBar label="ประวัติ"></TopAppBar>
        </div>
        <div class="py-8">
            <HistoryItem
                v-for="(order,index) in orders"
                :id="index"
                :order_status="order.order_status"
                :food_image="order.food_image"
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
                :totalOrder="totalOrder"
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
          order_status: 'รอทำ',
          food_image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          food_name: 'ข้าวมันไก่',
          order_price: 45,
          order_quantity: 1,
          order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          order_status: 'กำลังทำ',
          food_image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          food_name: 'ข้าวมันไก่',
          order_price: 90,
          order_quantity: 2,
          order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          order_status: 'ส่งถึงโต๊ะแล้ว',
          food_image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          food_name: 'ข้าวมันไก่',
          order_price: 135,
          order_quantity: 3,
          order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
      ],
    };
  },
  computed: {
    totalOrder() {
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
