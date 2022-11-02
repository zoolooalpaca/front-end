<template>
  <div class="nav-menu-dashboard">
    <div class="
          basis-1/4
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
      <div>
        <i>
          <button @click="showMenu()">
        <span class="material-symbols-outlined">
          menu
        </span>
          </button>
        </i>
      </div>
        <div>
          <h3 class="headline-large">Dashboard</h3>
        </div>


      <div class="main-content-dashboard mr-20">
        <div class="topic">
          <h3 class="body-large ml-3">ความพึงพอใจต่ออาหารจากการประเมินของลูกค้า</h3>
        </div>
        <div class="block-body">
        <GChart
            type="PieChart"
            :options="options"
            :data="data"
        />
        </div>

        <div class="topic">
          <h3 class="body-large ml-3">รีวิวจากลูกค้า</h3>
        </div>

        <div class="scroller">
          <div class="review-container"
              v-for="(review, index) in reviews" :key="index"
          >
              <p class="body-medium"> {{ review.feedback }} </p>
          </div>
        </div>

        <div class="topic">
          <h3 class="body-large ml-3">รายรับภายในร้าน</h3>
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
  </div>
</template>

<script>
import NavItem from "../../components/NavBarDrawer/NavItem.vue";
import BannerCard from "../../components/BannerCard.vue";
import { GChart } from "vue-google-charts";
export default {
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
      reviews: [
        {feedback: 'ดีมาก ๆ เลยค่ะ'},
        {feedback: 'ร้านสะอาดมากค่ะ อาหารก็อร่อย'},
        {feedback: 'ราคาเป็นมิตรวัตถุดิบคุณภาพดี'},
        {feedback: 'ร้านใหญ่เกินต้านมากค่ะ'},
        {feedback: 'สุดยอดไปเลยต่ะ'},
        {feedback: 'อาหารอร่อย ราคาสมเหตุสมผล'},
      ],

      data: [
        ['Rating', 'Score'],
        ['5 Stars', 23],
        ['4 Stars', 15],
        ['3 Stars',  12],
        ['2 Stars', 2],
        ['1 Stars', 1]
      ],
      options: {
        width: 700,
        height: 500,
        background: "var(--md-sys-color-surface)",
      }
    }
  },
  components: {
    NavItem,
    GChart,
    BannerCard
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
  padding: 10px;
  width: 100%;
}
div.block-body {
  background-color: var(--md-sys-color-surface);
  padding: 10px;
  width: 100%;
}
div.review-container {
  background-color: var(--md-sys-color-surface);
  border-radius: 10px;
  border: 2px solid;
  border-color: #8e9099;
  padding: 10px;
  margin: 5px 5px 5px 5px;
}
.scroller {
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
  margin-bottom: 10px;
}
::-webkit-scrollbar {
  // Width of vertical scroll bar
  width: 8px;
  // Height of horizontal scroll bar
  height: 10px;

}
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: #c2c9d2;
}

.nav-menu-dashboard {
  display: flex;
  flex-direction: row;
}
.nav-content {
  display: flex;
  flex-direction: column;
  width: 300px;
}
i {
  display: none;
}
.main-content-dashboard {
  display: flex;
  flex-direction: column;
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
    text-align: left;
    padding: 0 10px 10px 0;
  }
  .main-content-dashboard {
    display: flex;
    flex-direction: column;
  }
}
</style>