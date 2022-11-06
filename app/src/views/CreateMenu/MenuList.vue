<template>
  <div class="nav-menu-management">
    <div class="flex">
      <i class="management">
        <button @click="showMenu()">
          <span class="material-symbols-outlined"> menu </span>
        </button>
      </i>
      <div
        class="
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
          <span class="material-symbols-outlined">{{ item.icon }}</span>
        </NavItem>
      </div>
    </div>

    <div class="basis-3/4">
      <div>
        <h3 class="headline-large">รายการอาหาร</h3>
      </div>

      <div class="main-content-menu-list">
        <button
          class=" rounded-lg p-1 justify-center primary-container"
          @click="goToCreateMenu()"
        >
          <span class="material-symbols-outlined">add</span>
        </button>
          <FoodCard
            v-for="(item, index) in foodCardItems" :key="index"
            :id="index"
            :image="item.images.thumb"
            :name="item.food_name"
            :price="item.food_price"
            :active="index == activeId"
            :buttonDisabled="true"
          />
      </div>
    </div>
  </div>
</template>

<script>
import NavItem from "../../components/NavBarDrawer/NavItem.vue";
import FoodCard from "../../components/FoodCard/FoodCard.vue";
import { ref } from "vue";
import { useFoodStore } from "../../stores/food.js";

export default {
  setup() {
    const showSidebar = ref(false);
    const foodStore = useFoodStore();
    return {
      showSidebar,
      foodStore,
    };
  },
  beforeMount() {
    this.getMenuList();
  },
  data() {
    return {
      showMobileMenu: false,
      activeId: 0,
      loopCount: 4,
      navItems: [
        { label: "ชื่อลูกค้า", icon: "account_circle", router: "" },
        {
          label: "สรุปข้อมูล",
          icon: "signal_cellular_alt",
          router: "/Dashboard",
        },
        { label: "รายการอาหาร", icon: "restaurant_menu", router: "/MenuList" },
        { label: "โปรโมชัน", icon: "grid_view", router: "/PromotionList" },
      ],
      foodCardItems: [],
    };
  },
  components: {
    NavItem,
    FoodCard,
  },
  methods: {
    async getMenuList() {
      if (!this.foodStore.foods?.data) {
        await this.foodStore.fetch();
      }
      this.foodCardItems = this.foodStore.foods.data;
      console.log(this.foodCardItems);
    },
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    goToCreateMenu() {
      this.$router.push(`/management/menu/create-menu`);
    },
    onClickItem(id, url) {
      this.activeId = id;
      if (url != "") {
        this.$router.push(url);
      }
    },
  },
};
</script>

<style lang="scss">
div.create-menu {
  border-radius: 30px;
  background: var(--md-sys-color-primary-container);
  padding: 25px 20px 20px 25px;
}


div.main-content-menu-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 8px;
}

@media screen and (max-width: 768px) {
  div.main-content-menu-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media screen and (max-width: 650px) {
  div.main-content-menu-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media screen and (max-width: 420px) {
  div.main-content-menu-list {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
