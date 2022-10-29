import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ServeView from '@/views/OrderToServe/OrderToServeView.vue';
import HistoryView from '@/views/OrderHistory/OrderHistoryView.vue';
import OrderView from '@/views/OrderDetail/OrderDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/serve',
      name: 'serve-order',
      component: ServeView,
    },
    {
      path: '/history',
      name: 'order-history-list',
      component: HistoryView,
    },
    {
      path: '/order',
      name: 'order-detail',
      component: OrderView
    }
  ],
});

export default router;
