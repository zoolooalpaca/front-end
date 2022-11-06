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
                  <label for="order_amount">{{totalOrders}} รายการ</label>
              </div>
              <div>
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
              </div>
          </div>
    </div>
</div>
</template>


<script>
import CookItem from "../../components/CookItem/CookItem.vue";
import NavItem from "../../components/NavBarDrawer/NavItem.vue";
import SectionHeader from "../../components/NavBarDrawer/SectionHeader.vue";


export default {
  components: {
    CookItem,
    SectionHeader,
    NavItem
},

  computed: {
    totalOrders() {
      return this.orders.length;
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
  },

  data() {
    return {
      showMobileMenu: false,
      navItems: [
        {label: 'รับลูกค้าใหม่', icon: 'sentiment_satisfied', router: '/employee/new-customer',activeId:0},
        {label: 'จ่ายเงิน', icon: 'payment', router: '/employee/payment/create-promptpay',activeId:0},
        {label: 'อาหารที่ต้องเสิร์ฟ', icon: 'room_service', router: '/employee/order/serve',activeId:0},
        {label: 'อาหารที่ต้องทำ', icon: 'soup_kitchen', router: '/employee/order/order-to-do',activeId:1},
        {label: 'ออกจากระบบ', icon: 'logout', router: '/logout', activeId:0}
      ],
      
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
};

</script>

<style>
</style>
