<template>
<div class>
    <div class="main-content-employee-view">
        <div class="flex">
          <i>
          <button @click="showMenu()">
            <span class="material-symbols-outlined">
              menu
            </span>
          </button>
          </i>
          <div class="
          w-64
            absolute
            inset-y-0
              left-0
              md:relative md:-translate-x-0
              transform
              -translate-x-full
              transition
              duration-200
              ease-in-out"
              :class="this.showMobileMenu
            ? 'relative -translate-x-0' : 'closed-menu'">
            <h3 class="headline-large ml-4 mb6-4">อร่อยโภชนา</h3>
            <SectionHeader label="สำหรับพนักงาน" />
            <NavItem
              v-for="(item, index) in navItems"
                :id="index"
                :label="item.label"
                :active="item.activeId"
                :url="item.router"
                :onClickItem="onClickItem"
                :key="index"
              >
              <span class="material-symbols-outlined">{{item.icon}}</span>              
            </NavItem>
            </div>
        </div>

          <div class="p-4 flex-grow">
              <h3 class="headline-large">อาหารที่รอดำเนินการ</h3>
              <div class="py-4 text-right flex-col">
                  <label for="order_amount">{{ totalOrders }} รายการ</label>
              </div>
              <div>
                  <CookItem
                      v-for="(order, index) in tableOrderList"
                      :id="index"
                      :tableNumber="order.tableNumber"
                      :status="order.order_status"
                      :foodName="order.food_name"
                      :foodAmount="order.order_quantity"
                      :foodDescription="order.order_request"
                      :key="index"
                  >
                  </CookItem>
              </div>
          </div>
    </div>
</div>
</template>


<script>
import CookItem from "../../components/CookItem/CookItem.vue";
import NavItem from "../../components/NavBarDrawer/NavItem.vue";
import SectionHeader from "../../components/NavBarDrawer/SectionHeader.vue";
import {useOrderStore} from "../../stores/order";


export default {
  components: {
    CookItem,
    SectionHeader,
    NavItem
},
  setup() {
    const orderStore = useOrderStore();
    return {orderStore};
  },
  created() {
    this.getOrderItems();
  },

  computed: {
    totalOrders() {
      return this.orderedItems.length;
    },
    tableOrderList() {
      return this.orderedItems;
    },
  },

  methods: {
    onClickItem(id, url) {
      this.activeId = id;
      if (url != '') {
        this.$router.push(url);
      }
    },
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    async getOrderItems() {
      await this.orderStore.fetch();
      this.orderedItems = this.orderStore.orders.data;
      console.log(this.orderedItems);
    },
  },

  data() {
    return {
      showMobileMenu: false,
      navItems: [
        {label: 'รับลูกค้าใหม่', icon: 'sentiment_satisfied', router: '/employee/new-customer',activeId:0},
        {label: 'จ่ายเงิน', icon: 'payment', router: '/employee/payment/create-promptpay',activeId:0},
        {label: 'อาหารที่ต้องเสิร์ฟ', icon: 'room_service', router: '/employee/order/serve',activeId:0},
        {label: 'อาหารที่ต้องทำ', icon: 'soup_kitchen', router: '/employee/order/order-to-do',activeId:1},
      ],
      
      orderedItems: [],
    };
  },
};

</script>

<style>
</style>
