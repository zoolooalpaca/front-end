import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/promptPay/create',
      name: 'promptPay.create',
      component: () => import('@/views/Payment/CreatePromptpayView.vue')
    }
  ],
});

export default router;
