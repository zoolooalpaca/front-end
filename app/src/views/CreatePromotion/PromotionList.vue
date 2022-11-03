<!-- eslint-disable max-len -->
<template>
  <div class="flex flex-row">
    <div class="basis-1/4">
      <h3 class="headline-small ml-4 mb6-4">ชื่อร้าน</h3>
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
    <div class="basis-3/4 ml-5 ">
      <h3 class="headline-large">รายการโปรโมชัน</h3>
      <div class="grid grid-cols-4 gap-4" >
        <div class="grid justify-items-center create-menu">
          <button
              class="rounded-full p-1 justify-center"
              @click="goToCreatePromotion()"
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
import SectionHeader from '../../components/NavBarDrawer/SectionHeader.vue';
import NavItem from '../../components/NavBarDrawer/NavItem.vue';
import FoodCard from '../../components/FoodCard/FoodCard.vue';

export default {
  data() {
    return {
      activeId: 0,
      loopCount: 4,
      navItems: [
        {label: 'ชื่อลูกค้า', icon: 'account_circle', router: ''},
        // eslint-disable-next-line max-len
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
    goToCreatePromotion(){
      this.$router.push(`/CreatePromotion`)
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

<style>
div.create-menu {
  border-radius: 30px;
  background: var(--md-sys-color-primary-container);
  padding: 25px 20px 20px 25px;
}
</style>