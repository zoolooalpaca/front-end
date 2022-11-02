<template>
  <div class="flex flex-row">
    <div class="basis-1/4 ">
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
      <div>
        <h3 class="headline-large mb-10">Dashboard</h3>
      </div>
      <div class="topic p-3">
        <h3 class="body-large">ความพึงพอใจต่ออาหารจากการประเมินของลูกค้า</h3>
      </div>
      <div class="block-body">
        <GChart
            type="PieChart"
            :options="options"
            :data="data"
        />
      </div>
      <div class="topic p-3">
        <h3 class="body-large">รายรับ - รายจ่ายภายในร้าน</h3>
      </div>
      <div class="block-body">
        <GChart
            type="Histogram"
            :options="options"
            :data="data"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavItem from "../../components/NavBarDrawer/NavItem.vue";
import { GChart } from "vue-google-charts";
export default {
  name: "App",
  data() {
    return {
      activeId: 0,
      loopCount: 4,
      navItems: [
        {label: 'ชื่อลูกค้า', icon: 'account_circle', router: ''},
        {label: 'สรุปข้อมูล', icon: 'signal_cellular_alt', router: '/Dashboard'},
        {label: 'รายการอาหาร', icon: 'restaurant_menu', router: '/MenuList'},
        {label: 'โปรโมชัน', icon: 'grid_view', router: '/PromotionList'},
      ],
      data: [
        ['Daily Routine', 'Hours per Day'],
        ['Work',     14],
        ['Eat',      1],
        ['Reading',  2],
        ['Exercise', 2],
        ['Sleep',    5]
      ],
      options: {
        width: 1100,
        height: 400
      }
    }
  },
  components: {
    NavItem,
    GChart
  },
  methods: {
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
div.topic {
  background-color: var(--md-sys-color-primary-container);
  border-radius: 20px;
  margin-bottom: 10px;
}
div.block-body {
  background-color: var(--md-sys-color-surface);
  padding: 10px;
}
</style>