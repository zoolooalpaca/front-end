<template>
    <div class='main-content-employee-view'>
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

        <div class='ml-2 w-full'>
            <span class='headline-medium'> ตอนนี้กำลังดำเนินการ </span>
            <div class="order-cooking-page">
                  <CookingBoardDrawer></CookingBoardDrawer>
                  <div class='order-cooking-inside'>
                    <ServeFoodButton/>
                    <CancelCookingFood/>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
import CookingBoardDrawer from '../../components/CookingBoard/CookingBoardDrawer.vue';
import CancelCookingFood from '../../components/CancelCookingFood/CancenCookingFood.vue';
import ServeFoodButton from '../../components/ServeFoodButton/ServeFoodButton.vue';
import NavItem from '../../components/NavBarDrawer/NavItem.vue';
import SectionHeader from '../../components/NavBarDrawer/SectionHeader.vue';


export default {
  components: {
    CookingBoardDrawer,
    CancelCookingFood,
    ServeFoodButton,
    NavItem,
    SectionHeader
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
    };
  },
};
</script>

<style>
.order-size {
  width: 600px;
  height: 790px;
}

.order-cooking-page {
  display: flex;
  flex-direction: row;
  margin-left: 16px;
}

.order-cooking-inside {
  margin-top: 16px;
}

@media screen and (max-width: 768px) {
  .order-cooking-page {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
  }

  .order-cooking-inside {
    margin-bottom: 1rem;
  }
}
</style>

