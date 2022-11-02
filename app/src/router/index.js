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
      path: '/reviews',
      name: 'reviews',
      component: () => import('@/views/reviews/CreateReviewView.vue')
    },
    {
      path: '/ThankYou',
      name: 'ThankYou',
      component: () => import('@/views/reviews/ThankYou.vue')
    },
    {
      path: '/AllPromotion',
      name: 'AllPromotion',
      component: () => import('@/views/AllPromotionView.vue')
    },
    {
      path: '/promptPay/create',
      name: 'promptPay.create',
      component: () => import('@/views/Payment/CreatePromptpayView.vue')
    },
    {
      path: '/bill',
      name: 'bill',
      component: () => import('@/views/Payment/BillView.vue')
    }
  ],
});

export default router;
