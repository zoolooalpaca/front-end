<template>
  <div class="flex flex-row">
    <div class="flex flex-col w-auto float-left">
      <top-app-bar/>
      <nav-bar-drawer/>
    </div>

    <div class="ml-8">
      <h1 class="text-3xl mb-3">{{ title }}</h1>
      <h3 class="text-xl mb-5">{{ section }}</h3>
      <label class="inline-flex">
        <input type="text" class="border rounded-lg">
        <button class="flex items-center">
          <span class="material-symbols-outlined">cancel</span>
        </button>
      </label>

      <div class="borderColor mt-5 flex flex-row">
        <div class="mt-5 flex flex-col">
          <h3 class="mb-3 text-xl">ใบเสร็จ</h3>
          <BillOrderItem/>
        </div>

        <div class="borderColor ml-8 mt-5">
          <h3 class="mb-3 text-xl">พร้อมเพย์</h3>
          <img :src="image">
          <div>
            <button class="button-payment float-left border rounded-full p-2 mt-4"> พิมพ์ </button>
          </div>
        </div>
      </div>

      <div>
        <button class="button-payment float-left border rounded-full p-2 mt-4">จ่ายแล้ว</button>
      </div>


    </div>

  </div>
</template>
<script>
import TopAppBar from "@/components/TopAppBar/TopAppBar.vue";
import NavBarDrawer from "@/components/NavBarDrawer/NavBarDrawer.vue";
import Item from "@/components/NavBarDrawer/NavItem.vue";
import BillOrderItem from "@/components/BillOrderItem/BillOrderItem.vue";
export default {
  data() {
    return {
      title: "จ่ายเงิน",
      section: "เลือกลูกค้า",
      image: 'https://www.freepnglogos.com/uploads/qr-code-png/qr-code-file-bangla-mobile-code-0.png'
    }
  },
  components: {
    TopAppBar,
    NavBarDrawer,
    Item,
    BillOrderItem
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
  border-color: var(--md-sys-color-outline-light);
}
</style>