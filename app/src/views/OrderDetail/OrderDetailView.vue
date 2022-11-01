<template>
    <div class="relative">
        <div>
            <TopAppBar label="อาหารในถาด"></TopAppBar>
        </div>
        <div class="py-8">
            <OrderItem></OrderItem>
            <OrderDrawer></OrderDrawer>  
        </div>
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
        <div class="mt-4 float-right">
            <button class="
                text-center
                button1
                primary-container
                ">
                + สั่ง
            </button>
        </div>
    </div>
</template>

<script>
import TopAppBar from '../../components/TopAppBar/TopAppBar.vue';
import OrderItem from '../../components/OrderItem/OrderItem.vue'
import OrderDrawer from '../../components/OrderItem/OrderDrawer.vue';


export default{
components:{
    TopAppBar,
    OrderItem,
    OrderDrawer,
},
data() {
  return {
    allorders:[
    {
        order_id: 1,
        price: 40,
      },
      {
        order_id: 2,
        price: 10,
      },
      {
        order_id: 3,
        price: 140,
      },
      {
        order_id: 4,
        price: 140,
      },
    ]
  };
},
computed: {
  totalPrice() {
    return this.allorders.reduce((prev, {price}) => prev + price, 0);
  },
},
}
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