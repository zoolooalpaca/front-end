<!-- /TODO:
  ใช้ข้อมูล
  table:
  -table_id (โต๊ะที่สั่งorderนั้นๆ)

  order description(ที่สั่งแล้ว):
  -order id
  -order_status = ดึงdataมาเฉพาะ status 'ยังไม่เสิร์ฟ'
  -food id > food name
  -quantity

  computed:
  totalOrder = จำนวนรายการorder เฉพาะที่ order_status ='ยังไม่เสิร์ฟ'

  methods:
  อยู่ในcomponent
  -ToServeItem.vue > serveDone() = กดยืนยันว่าorderนั้นได้เสิร์ฟแล้ว
  แล้ว order_status เป็น 'ส่งถึงโต๊ะแล้ว' (orderนั้นจะหายไปจากlist toserve)

  navbar>
    -showMenu() = กดเพื่อให้โชว์navbarที่ซ่อนไว้
    อยู่ในcomponents
    -NavBarEmployee.vue > onClickItem() = ส่งไปแต่ละหน้าตามurl
  / -->
<template>
  <div class="relative">
    <div class="flex flex-row main-content-employee-view">
      <div class="flex">
        <i>
          <button @click="showMenu()">
            <span class="material-symbols-outlined">
              menu
            </span>
          </button>
        </i>
        <div
        class="
            w-64
            absolute
            inset-y-0
            left-0
            md:relative md:-translate-x-0
            transform
            -translate-x-full
            transition
            duration-200
            ease-in-out
            "
            :class="
            this.showMobileMenu ? 'relative -translate-x-0' : 'closed-menu'
            "
        >
          <h3 class="flex headline-large ml-4 mb6-4">อร่อยโภชนา</h3>
          <SectionHeader label="สำหรับพนักงาน" />
          <NavItem
            v-for="(item, index) in navItems"
              :id="index"
              :label="item.label"
              :active="item.activeId"
              :url="item.router"
              :onClickItem="onClickItem"
              :key="index">
            <span class="material-symbols-outlined">{{item.icon}}</span>
          </NavItem>
        </div>
      </div>

      <div class="p-4 flex-grow">
        <h1 class="headline-medium">รายการอาหารที่ต้องเสิร์ฟ</h1>
        <div class="py-4 text-right flex-col">
          <label for="order_amount">{{ totalOrders }} รายการ</label>
        </div>
        <div>
          <ToServeItem
            v-for="(table, index) in tableOrderList"
            :orders="table.order_description"
            :tableNumber="table.table_number"
            :key="index"
          >
          </ToServeItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavItem from '../../components/NavBarDrawer/NavItem.vue';
import SectionHeader from '../../components/NavBarDrawer/SectionHeader.vue';
import ToServeItem from '../../components/ToServeItem/ToServeItem.vue';
import {useOrderStore} from '../../stores/order';

export default {
  components: {
    NavItem,
    SectionHeader,
    ToServeItem,
  },

  setup() {
    const orderStore = useOrderStore();
    return {orderStore};
  },

  created() {
    this.fetchOrder();
  },

  computed: {
    totalOrders() {
      return this.orderList.length;
    },
    tableOrderList() {
      return this.orderList;
    },
  },

  methods: {
    // โชว์navbar
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    async fetchOrder() {
      await this.orderStore.fetch();
      const orderList = this.orderStore.orders.data;
      this.orderList = orderList;
      console.log(this.orderList);
    },
    onClickItem(id, url) {
      this.activeId = id;
      if (url != '') {
        this.$router.push(url);
      }
    },
  },

  data() {
    return {
      showMobileMenu: false,
      orderList: [],

      navItems: [
        {label: 'รับลูกค้าใหม่', icon: 'sentiment_satisfied', router: '/employee/new-customer',activeId: 0,},
        {label: 'จ่ายเงิน', icon: 'payment', router: '/employee/payment/create-promptpay',activeId: 0,},
        {label: 'อาหารที่ต้องเสิร์ฟ', icon: 'room_service', router: '/employee/order/serve',activeId: 1,},
        {label: 'อาหารที่ต้องทำ', icon: 'soup_kitchen', router: '/employee/order/order-to-do',activeId: 0,},
      ],
    };
  },
};
</script>
