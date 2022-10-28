<template>
  <div class="flex flex-row">
    <div class="basis-1/4">
      <SectionHeader label="อร่อยโภชนา" />
      <NavItem
          v-for="(item, index) in navItems"
          :id="index"
          :label="item.label"
          :active="index == activeId"
          :onClickItem="onClickItem"
          :key="index"
      >
        <span class="material-symbols-outlined">{{item.icon}}</span>
      </NavItem>
    </div>
    <div class="basis-3/4">
      <SectionHeader label="รายการอาหาร"/>
      <div class="flex flex-row">
      <FoodCard
          v-for="(item, index) in foodCardItems"
          :id="index"
          :image="item.image"
          :name="item.name"
          :price="item.price"
          :active="index == activeId"
          :key="index"
        >

      </FoodCard>
      </div>
<!--      <div class="row">-->
<!--        <div class="col-md-3" v-for="loop in loopCount" v-bind:key="loop" >-->
<!--          <div class="col-md-3" v-for="(item, index) in foodCardItems" :key="index">-->
<!--          <FoodCard-->
<!--              :id="index"-->
<!--              :image="item.image"-->
<!--              :name="item.name"-->
<!--              :price="item.price"-->
<!--              :active="index == activeId"-->
<!--          >-->
<!--          </div>-->
<!--      </div>-->

    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/NavBarDrawer/SectionHeader.vue";
import NavItem from "../../components/NavBarDrawer/NavItem.vue";
import FoodCard from "../../components/FoodCard/FoodCard.vue";

export default {
  data() {
    return {
      activeId: 0,
      loopCount: 4,
      navItems: [
        {label: 'ชื่อลูกค้า', icon: 'account_circle'},
        {label: 'สรุปข้อมูล', icon: 'signal_cellular_alt'},
        {label: 'รายการอาหาร', icon: 'restaurant_menu'},
        {label: 'โปรโมชัน', icon: 'grid_view'},
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
        // {image: 'https://cpfmshop.com//uploads/283/product/949381e47baff4b832cb40683878b6ce_full.jpg',
        //   name: 'ข้าวมันไก่', price: 65},
        // {image: 'https://img.wongnai.com/p/1920x0/2017/06/26/16b349df2d5b471bbca679e6117f1544.jpg',
        //   name: 'ข้าวขาหมู', price: 70},
        // {image: 'https://food.mthai.com/app/uploads/2017/05/Noodles-with-coconut-milk.jpg',
        //   name: 'ขนมจีน', price: 40},
        // {image: 'https://images.deliveryhero.io/image/fd-th/LH/kvfy-hero.jpg',
        //   name: 'ตำถาด', price: 120},
      ]
    }
  },
  components: {
    SectionHeader,
    NavItem,
    FoodCard,

  }
}
</script>

<style>

</style>