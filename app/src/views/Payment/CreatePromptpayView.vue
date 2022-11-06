<template>
  <div class="nav-menu-management">
    <div class="flex">
      <i class="management">
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
          ease-in-out
          "
           :class="this.showMobileMenu ? 'relative -translate-x-0' : 'closed-menu'"
      >
          <h3 class="headline-large ml-4 mb6-4">อร่อยโภชนา</h3>
          <SectionHeader label="สำหรับพนักงาน" />
          <NavItem
              v-for="(item, index) in navItems"
              :id="index"
              :label="item.label"
              :active="index == activeId"
              :url="item.router"
              :onClickItem="onClickItem"
              :key="index">
            <span class="material-symbols-outlined">{{item.icon}}</span>
          </NavItem>
        </div>

    <div class="basis-3/4">
      <div class="ml-10">
        <div class="flex flex-col">
          <h1 class="text-3xl mb-3">{{ title }}</h1>
          <span class="text-xl mb-5">{{ section }}</span>
        </div>

          <select v-model="selects"
                  :value="selects.table_number"
                  class="text-color">
            <option v-for="table,idx in options" :key="idx" class="text-color">{{table}}</option>
          </select>

        <div class="base-block border-box mt-2">
          <div class="flex-display width-100 fix-grid-display">
            <div class="scroller borderColor mt-5">
              <span class="margin-text text-xl">ใบเสร็จ</span>
              <br/>
                <BillOrderItem v-for="table in tables" :key="table.id"
                               :table="table" :url="`tables/${table.id}`"
                               class="mt-2 mb-2">
                </BillOrderItem>
            </div>

            <div class="borderColor mt-5">
              <h3 class="margin-text text-xl">พร้อมเพย์</h3>

              <div>
                <button @click="printBill" class="button-payment button-style mb-4 ml-3"> พิมพ์ </button>
              </div>
            </div>
          </div>

          <div>
            <button @click="paid" class="button-payment button-style">จ่ายแล้ว</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import NavItem from "@/components/NavBarDrawer/NavItem.vue";
import SectionHeader from "@/components/NavBarDrawer/SectionHeader.vue";
import BillOrderItem from "@/components/BillOrderItem/BillOrderItem.vue";
import VueQrcode from 'vue-qrcode';
import { useOrderStore } from "@/stores/order";
import { useTableStore } from '@/stores/table';
import {paymentAPI} from '../../services/api';
export default {
  setup() {
    const orderStore = useOrderStore()
    const tableStore = useTableStore()

    return {orderStore, tableStore}
  },
  data() {
    return {
      title: "จ่ายเงิน",
      section: "เลือกลูกค้า",
      qrCode: '',
      error: null,
      payment: '',
      navItems: [
        {label: 'รับลูกค้าใหม่', icon: 'sentiment_satisfied', router: '/employee/new-customer',activeId:0},
        {label: 'จ่ายเงิน', icon: 'payment', router: '/employee/payment/create-promptpay',activeId:1},
        {label: 'อาหารที่ต้องเสิร์ฟ', icon: 'room_service', router: '/employee/order/serve',activeId:0},
        {label: 'อาหารที่ต้องทำ', icon: 'soup_kitchen', router: '/employee/order/order-to-do',activeId:0},
      ],
      showMobileMenu: false,
      orderItems: null,
      selects: [ { table_number : '' }],
      tables: [],
      employee: '',
      qrValue: null,
      qrScale: 10,
      correctionLevel: "H"
    }
  },
  components: {
    NavItem,
    SectionHeader,
    BillOrderItem,
    VueQrcode
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    onClickItem(id, url) {
      this.activeId = id;
      if (url != '') {
        this.$router.push(url);
      }
    },
    getData() {
      if (selects === table.id) {

      }
    },
    printBill() {
      this.$router.push(`/employee/payment/bill`)
    },
    async paid() {
      try {
        this.error = null;
        const response = await paymentAPI.saveNew(this.employee);
        if (response.status_code == 201) {
          console.log(response.data);
        }
        if (response.status_code == 200) {
          this.$router.push(`/management/dashboard`);
        }
      } catch (error) {
        console.log(error);
        console.log("ERRRR:: ", error.response.data)
        this.error = error.message;
      }
    },
    async fetchOrder() {
      await this.orderStore.fetch()
      this.orders = this.orderStore.orders.data;
      console.log(this.orders)
    },
    async fetchTables() {
      await this.tableStore.fetch();
      this.tables = this.tableStore.tables.data;
      console.log(this.tables);
    },
  },
  created() {
    this.fetchOrder();
    this.fetchTables();
  },
  computed: {
    options() {
      return this.tables
          .filter((val) => val.current_customer)
          .map((table) => table.table_number)
    }
  },
};
</script>

<style lang="scss">
.scroller {
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
  margin-bottom: 10px;
}

.margin-text {
  margin-left: 8px;
  margin-bottom: 5px;
  margin-top: 5px;
}
.button-style {
  margin-top: 8px;
  padding: 10px;
  float: left;
  border-radius: 9999px;
}
.button-payment {
  color: var(--md-sys-color-on-primary);
  background: var(--md-sys-color-primary);
  border-color: var(--md-sys-color-primary);
}
.borderColor {
  border: 1px solid var(--md-sys-color-outline-light);
  border-radius: 15px;
}
.text-color {
  color: var(--md-sys-color-on-primary-dark);
}
.scroll {
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
}
.resize-component{
  width: 100%;
  display: flex;
  flex-direction: column;
}

.border-box {
  box-sizing: border-box;
}
.width-100 {
  width: 100%;
}
.flex-display {
  display: flex;
  flex-direction: column;
  -webkit-box-align: stretch;
  align-items: stretch;
}
.base-block {
  border-radius: 8px;
}
.fix-grid-display{
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
}
@media screen and (max-width: 768px) {
  .fix-grid-display {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
  }
  .base-block {
    width: inherit;
    min-width: 100%;
  }
}
</style>