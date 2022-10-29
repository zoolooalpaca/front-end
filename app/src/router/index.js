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
    }
  ],
});

export default router;
