<template lang=''>
    <div class='main-content-employee-view'>
        <div>
            <h3 class="headline-large ml-4 mb6-4">อร่อยโภชนา</h3>
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
            <NavBarEmployee></NavBarEmployee>
            </div>
            <i>
                <button @click="showMenu()">
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                </button>
            </i>
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
import NavBarEmployee from '../../components/NavBarDrawer/NavBarEmployee.vue';
import CookingBoardDrawer from '../../components/CookingBoard/CookingBoardDrawer.vue';
import CancelCookingFood from '../../components/CancelCookingFood/CancenCookingFood.vue';
import ServeFoodButton from '../../components/ServeFoodButton/ServeFoodButton.vue';


export default {
  components: {
    NavBarEmployee,
    CookingBoardDrawer,
    CancelCookingFood,
    ServeFoodButton,
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },

  data() {
    return {
      showMobileMenu: false,
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

