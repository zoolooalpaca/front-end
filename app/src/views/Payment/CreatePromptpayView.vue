<template>
  <div class="set-display-grid">
    <div class="flex flex-col float-left">
      <top-app-bar class="set-to-left"/>
      <nav-bar-drawer class="set-to-left"/>
    </div>

    <div class="ml-8">
      <h1 class="text-3xl mb-3">{{ title }}</h1>
      <h3 class="text-xl mb-5">{{ section }}</h3>

      <label class="inline-flex">
        <input type="text" id="table_number" class="border rounded-lg">
        <button class="flex items-center">
          <span class="material-symbols-outlined">cancel</span>
        </button>
      </label>

      <div class="mt-5 grid grid-cols-2 ">
        <div class="borderColor mt-5 block flex flex-col">
          <h3 class="mb-3 text-xl ml-3 mt-3">ใบเสร็จ</h3>
          <BillOrderItem class="ml-3 mr-3 mb-2 w-auto"/>
        </div>

        <div class="borderColor ml-8 mt-5">
          <h3 class="text-xl ml-3 mt-3">พร้อมเพย์</h3>
          <img :src="image" style="width: auto; object-fit: contain">
          <div>
            <button @click="printQRCode" class="button-payment float-left border rounded-full p-2 mt-4 mb-4 ml-3"> พิมพ์ </button>
          </div>
        </div>
      </div>

      <div>
        <button @click="paid" class="button-payment float-left border rounded-full p-2 mt-4">จ่ายแล้ว</button>
      </div>
    </div>
  </div>
</template>
<script>
import TopAppBar from "@/components/TopAppBar/TopAppBar.vue";
import NavBarDrawer from "@/components/NavBarDrawer/NavBarDrawer.vue";
import Item from "@/components/NavBarDrawer/NavItem.vue";
import BillOrderItem from "@/components/BillOrderItem/BillOrderItem.vue";
import { usePaymentStore } from "@/stores/payment.js";
export default {
  setup() {
    const payment_store = usePaymentStore()
    return { payment_store }
  },
  data() {
    return {
      title: "จ่ายเงิน",
      section: "เลือกลูกค้า",
      table_number: '',
      image: 'https://www.freepnglogos.com/uploads/qr-code-png/qr-code-file-bangla-mobile-code-0.png',
      error: null,
      payment: ''
    }
  },
  components: {
    TopAppBar,
    NavBarDrawer,
    Item,
    BillOrderItem
  },
  methods: {
    printQRCode() {

    },
    async paid() {
      try {
        this.error = null
        const payment_id = await this.payment_store.save(this.payment)
        if (payment_id) {
          this.$router.push(`/payments/${payment_id}`)
        }
      } catch (error){
        console.log(error)
        this.error = error.message
      }
    }
  }
}
</script>

<style>
.button-payment {
  color: var(--md-sys-color-on-primary);
  background: var(--md-sys-color-primary);
  border-color: var(--md-sys-color-primary);
}

.borderColor {
  border: 1px solid var(--md-sys-color-outline-light);
  border-radius: 15px;
}

.set-to-left {
  align-items: flex-start;
  width: auto;
}

.set-display-grid {
  display: grid;
  grid-template-columns: 1fr 80%;
  gap: 16px;
}

.side-nav{
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left:auto;
  background-color: #111;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
}
</style>