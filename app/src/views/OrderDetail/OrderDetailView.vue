<!-- /TODO:
  ใช้ข้อมูล
  order description: 
  -order id
  -order_status = ''
  -food id > food name food image
  -price(ราคารวมอาหารที่สั่งในorderนั้นทั้งหมด foodprice*quantity ??)
  -quantity
  -request

  computed:
  totalprice = ราคารวมทุกorderที่สั่ง ไม่รวมที่ยกเลิกไปแล้ว
  //ขึ้นที่แถบด้านล่าง

  methods:
  อยู่ในcomponents
  - TopAppBar.vue > goBack() = ย้อนกลับไปหน้าที่แล้ว
  - OrderItem.vue 
    (DeletePopup ใน component OrderConfirmDeletePopup = กดปุ่มแล้วแสดง popup ให้ confirm deleteOrder)
      > deleteOrder() = กดปุ่ม'เอาออก'เพื่อยืนยัน แล้วลบorderที่ได้เอามาใส่ในถาด
  
  -saveNewOrder() = กดปุ่ม 'สั่ง' แล้วรายการอาหารที่อยู่ในถาดจะsaveไปที่new order & status กลายเป็นรอทำ
  / -->
<template>
    <div class="relative">
        <div>
            <TopAppBar label="อาหารในถาด"></TopAppBar>
        </div>
        <div class="py-4">
          <OrderItem
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
          </OrderItem>
        </div>
        <div>
            <div class="flex gap-2">
                <div class="order-bar order-detail-bar">
                    <label>รวม</label>
                    <div class="order-detail">
                        <div class="flex ml-[14px]">
                            <span>{{totalPrice}} บาท</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-4 float-right">
                <button @click="saveNewOrder()"
                  class="
                    text-center
                    button1
                    primary-container
                    ">
                    + สั่ง
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import TopAppBar from '../../components/TopAppBar/TopAppBar.vue';
import OrderItem from '../../components/OrderItem/OrderItem.vue';


export default {
  components: {
    TopAppBar,
    OrderItem,
  },

  data() {
    return {
      orders: [
        {
          order_status:'',
          food_image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          food_name: 'ข้าวมันไก่',
          order_price: 135,
          order_quantity: '3',
          order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          order_status:'',
          food_image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          food_name: 'ข้าวมันไก่',
          order_price: 90,
          order_quantity: '2',
          order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          order_status:'',
          food_image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          food_name: 'ข้าวมันไก่',
          order_price: 45,
          order_quantity: '1',
          order_request: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
      ],
    };
  },

  methods:{
    saveNewOrder(){

    },
  },
  computed: {
    totalPrice() {
      return this.orders.reduce((prev, {order_price}) => prev + order_price, 0);
    },
  },
};
</script>

<style>
.button1{
    padding: 10px 24px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.order-bar{
    display: flex;
    align-content: center;
    padding: 8px;
    color: var(--md-sys-color-primary-container);
    background: var(--md-sys-color-on-primary-container);
}

.order-bar > .order-detail {
  display: flex;
  align-items: center;
  gap: 8px;
}

</style>
