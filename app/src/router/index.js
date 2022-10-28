import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import MenuList from "@/views/CreateMenu/MenuList.vue";
import CreateMenu from "@/views/CreateMenu/CreateMenu.vue";
import PromotionList from "@/views/CreatePromotion/PromotionList.vue";
import CreatePromotion from "@/views/CreatePromotion/CreatePromotion.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
  ],
});

export default router;
