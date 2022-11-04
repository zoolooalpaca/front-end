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

    <div class="basis-3/4 ml-10">
      <div class="flex">
        <i>
          <button @click="showMenu()">
        <span class="material-symbols-outlined">
          menu
        </span>
          </button>
        </i>
        <div>
          <h3 class="headline-large mb-10">Dashboard</h3>
        </div>

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
  /*To Do List
  *
  * - Data -
  * ต้องมีการดึงค่าข้อมูล Review มาแสดงในรายการอาหารที่แสดง
  *
  * - Method -
  *
  * */
  name: "App",
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
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
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
div.topic {
  background-color: var(--md-sys-color-primary-container);
  border-radius: 20px;
  margin-bottom: 10px;
}
div.block-body {
  background-color: var(--md-sys-color-surface);
  padding: 10px;
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
.main-content {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 768px) {
  .nav-menu {
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
  .main-content {
    display: flex;
    flex-direction: column;
  }
  .button-create-menu{
    background-color: var(--md-sys-color-tertiary-container);
    border: none;
    color: var(--md-sys-color-on-tertiary-container);
    text-decoration: none;
    padding: 10px 20px;
    margin: 4px 2px;
    border-radius: 10px;
    cursor: pointer;
  }
  .button-upload-file{
    background-color: var(--md-sys-color-primary-container);
    border: none;
    color: var(--md-sys-color-on-primary-container);
    text-decoration: none;
    padding: 6px 12px;
    margin: 4px 2px;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>