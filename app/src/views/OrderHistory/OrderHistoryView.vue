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
    (DeletePopupในOrderConfirmDeletePopup = popupให้confirm delete)
      > deleteHistoryOrder() = กดปุ่ม'ยกเลิกอาหาร'
      เพื่อยืนยันแล้วลบorderที่ได้สั่งไปแล้วแต่ยังอยู่ใน order_status 'รอทำ'
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
                :status="order.status"
                :foodImage="order.foodImage"
                :foodName="order.foodName"
                :orderPrice="order.orderPrice"
                :orderQuantity="order.orderQuantity"
                :orderRequest="order.orderRequest"
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
          status: 'รอทำ',
          foodImage: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          foodName: 'ข้าวมันไก่',
          orderPrice: 45,
          orderQuantity: 1,
          orderRequest: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          status: 'กำลังทำ',
          foodImage: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          foodName: 'ข้าวมันไก่',
          orderPrice: 90,
          orderQuantity: 2,
          orderRequest: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          status: 'ส่งถึงโต๊ะแล้ว',
          foodImage: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          foodName: 'ข้าวมันไก่',
          orderPrice: 135,
          orderQuantity: 3,
          orderRequest: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
      ],
    };
  },
  computed: {
    totalOrder() {
      return this.orders.length;
    },
    totalPrice() {
      return this.orders.reduce((prev, {orderPrice}) => prev + orderPrice, 0);
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
