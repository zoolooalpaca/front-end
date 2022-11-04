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
          ease-in-out
        "
         :class="this.showMobileMenu ? 'relative -translate-x-0' : 'closed-menu'"
    >
      <h3 class="headline-small ml-4">ชื่อร้าน</h3>
      <NavItem
          v-for="(item, index) in navItems"
          :id="index"
          :label="item.label"
          :active="index == activeId"
          :url="item.router"
          :onClickItem="onClickItem"
          :key="index"
      >
        <span class="material-symbols-outlined">{{item.icon}}</span>
      </NavItem>
    </div>

    <div class="ml-10">
      <div class="flex">
      <i>
        <button @click="showMenu()">
        <span class="material-symbols-outlined">
          menu
        </span>
        </button>
      </i>
        <div>
          <h3 class="headline-large">รายการอาหาร</h3>
        </div>
      </div>

      <div class="main-content-menu-list mr-20" >
        <div class="grid justify-items-center create-menu">
          <button
              class="rounded-full p-1 justify-center"
              @click="goToCreateMenu()"
          >
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
        <div v-for="(item, index) in foodCardItems" :key="index">
          <FoodCard
            :id="index"
            :image="item.image"
            :name="item.name"
            :price="item.price"
            :active="index == activeId"
          >
          </FoodCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/NavBarDrawer/SectionHeader.vue";
import NavItem from "../../components/NavBarDrawer/NavItem.vue";
import FoodCard from "../../components/FoodCard/FoodCard.vue";
import { ref } from 'vue'

export default {
  setup() {
    const showSidebar = ref(false);
    return {
      showSidebar,
    }
  },
  data() {
    return {
      showMobileMenu: false,
      activeId: 0,
      loopCount: 4,
      navItems: [
        {label: 'ชื่อลูกค้า', icon: 'account_circle', router: ''},
        {label: 'สรุปข้อมูล', icon: 'signal_cellular_alt', router: '/Dashboard'},
        {label: 'รายการอาหาร', icon: 'restaurant_menu', router: '/MenuList'},
        {label: 'โปรโมชัน', icon: 'grid_view', router: '/PromotionList'},
      ],
      foodCardItems: [
        {image: 'https://cpfmshop.com//uploads/283/product/949381e47baff4b832cb40683878b6ce_full.jpg',
          name: 'ข้าวมันไก่', price: 65},
        {image: 'https://img.wongnai.com/p/1920x0/2017/06/26/16b349df2d5b471bbca679e6117f1544.jpg',
          name: 'ข้าวขาหมู', price: 70},
        {image: 'https://food.mthai.com/app/uploads/2017/05/Noodles-with-coconut-milk.jpg',
          name: 'ขนมจีน', price: 40},
        {image: 'https://images.deliveryhero.io/image/fd-th/LH/kvfy-hero.jpg',
          name: 'ตำถาด', price: 120},
        {image: 'https://cpfmshop.com//uploads/283/product/949381e47baff4b832cb40683878b6ce_full.jpg',
          name: 'ข้าวมันไก่', price: 65},
        {image: 'https://img.wongnai.com/p/1920x0/2017/06/26/16b349df2d5b471bbca679e6117f1544.jpg',
          name: 'ข้าวขาหมู', price: 70},
        {image: 'https://food.mthai.com/app/uploads/2017/05/Noodles-with-coconut-milk.jpg',
          name: 'ขนมจีน', price: 40},
        {image: 'https://images.deliveryhero.io/image/fd-th/LH/kvfy-hero.jpg',
          name: 'ตำถาด', price: 120},
      ]
    }
  },
  components: {
    SectionHeader,
    NavItem,
    FoodCard,
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    goToCreateMenu(){
      this.$router.push(`/CreateMenu`)
    },
    onClickItem(id,url) {
      this.activeId = id;
      if (url != '') {
        this.$router.push(url)
      }
    },
  },
}
</script>

<style lang="scss">

div.create-menu {
  border-radius: 30px;
  background: var(--md-sys-color-primary-container);
  padding: 25px 20px 20px 25px;
}

.nav-menu{
  display: flex;
}
.nav-content{
  display: flex;
  flex-direction: column;
  width: 300px;
}
i {
  display: none;
}
div.main-content-menu-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 4px;
}

@media screen and (max-width: 768px) {
  .nav-menu{
    padding-top: 10px;
    position: absolute;
    width: 100%;
    display: flex;
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

  div.main-content-menu-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 4px;
  }
}
@media screen and (max-width: 650px) {
  div.main-content-menu-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 4px;
  }
}
@media screen and (max-width: 420px) {
  div.main-content-menu-list {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 4px;
  }
}
</style>