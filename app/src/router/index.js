import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import OrderToDoListView from '@/views/OrderToDoListView.vue';
import OrderCookingView from '@/views/OrderCookingView.vue';
import AllFoodItemView from '@/views/AllFoodItemView.vue';
import MenuList from '@/views/CreateMenu/MenuList.vue';
import CreateMenu from '@/views/CreateMenu/CreateMenu.vue';
import PromotionList from '@/views/CreatePromotion/PromotionList.vue';
import CreatePromotion from '@/views/CreatePromotion/CreatePromotion.vue';
import Dashboard from '@/views/Dashboard/Dashboard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/order-to-do',
      name: 'order-to-do',
      component: OrderToDoListView,
    },
    {
      path: '/order-cooking',
      name: 'order-cooking',
      component: OrderCookingView,
    },

    {
      path: '/menu',
      name: 'menu',
      components: AllFoodItemView,
    },

    {
      path: '/MenuList',
      name: 'MenuList',
      component: MenuList,
    },

    {
      path: '/CreateMenu',
      name: 'CreateMenu',
      component: CreateMenu,
    },

    {
      path: '/PromotionList',
      name: 'PromotionList',
      component: PromotionList,
    },

    {
      path: '/CreatePromotion',
      name: 'CreatePromotion',
      component: CreatePromotion,
    },

    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
});

export default router;
