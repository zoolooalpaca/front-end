import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import OrderToDoListView from '@/views/OrderToDoListView.vue';

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
  ],
});

export default router;
