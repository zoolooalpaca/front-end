<template>
  <div class="nav-menu">
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
    :class="this.showMobileMenu ? 'relative -translate-x-0' : 'closed-menu'">
      <SectionHeader label="อร่อยโภชนา" />
      <NavItem
          v-for="(item, index) in navItems"
          :id="index"
          :label="item.label"
          :active="index == activeId"
          :url="item.router"
          :onClickItem="onClickItem"
          :key="index"
      class="ite">
        <span class="material-symbols-outlined">{{item.icon}}</span>
      </NavItem>
    </div>

    <i>
      <button @click="showMenu()">
        <span class="material-symbols-outlined">
          menu
        </span>
      </button>
    </i>

    <div class="ml-8">
      <h1 class="text-3xl mb-3">{{ title }}</h1>
      <h3 class="text-xl mb-5">{{ section }}</h3>

      <label class="inline-flex">
        <input type="text" id="table_number" ref="tableNumber" class="text-color border rounded-lg">
        <button @click="deleteInput" class="flex items-center">
          <span class="material-symbols-outlined">cancel</span>
        </button>
      </label>

      <div class="mt-5 grid grid-cols-2 ">
        <div class="borderColor mt-5 block flex flex-col">
          <h3 class="mb-3 text-xl ml-3 mt-3">ใบเสร็จ</h3>
          <BillOrderItem class="flex justify-center"/>
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
import NavItem from "@/components/NavBarDrawer/NavItem.vue";
import SectionHeader from "@/components/NavBarDrawer/SectionHeader.vue";
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
      payment: '',
      navItems: [
        {label: 'รับลูกค้าใหม่', icon: 'sentiment_satisfied'},
        {label: 'จ่ายเงิน', icon: 'payment'},
        {label: 'อาหารที่ต้องเสิร์ฟ', icon: 'room_service'},
        {label: 'อาหารที่ต้องทำ', icon: 'soup_kitchen'},
      ],
      showMobileMenu: false
    }
  },
  components: {
    NavItem,
    SectionHeader,
    BillOrderItem
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    deleteInput() {
      this.$refs["tableNumber"].value = "";
    },
    printQRCode() {

    },
    onClickItem(id, url) {
      this.activeId = id;
      if (url != ''){
        this.$router.push(url)
      }
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

<style lang="scss">
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

.nav-menu {
  display: flex;
}

.nav-content {
  display: flex;
  flex-direction: column;
  width: 300px;
}
i {
  display: none;
}

@media screen and (max-width: 768px) {
  .nav-menu {
    padding-top: 10px;
    position: absolute;
    width: 60%;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  i {
    display: block;
    text-align: right;
    padding: 0 10px 10px 0;
  }
}
</style>