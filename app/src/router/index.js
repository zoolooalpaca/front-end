import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import ServeView from '@/views/OrderToServe/OrderToServeView.vue';
import HistoryView from '@/views/OrderHistory/OrderHistoryView.vue';
import OrderView from '@/views/OrderDetail/OrderDetailView.vue';
import NewCustomerView from '@/views/OrderQrCode/NewCustomerView.vue';
import OrderQrCodeView from '@/views/OrderQrCode/OrderQrCodeView.vue';
import MenuList from '@/views/CreateMenu/MenuList.vue';
import CreateMenu from '@/views/CreateMenu/CreateMenu.vue';
import PromotionList from '@/views/CreatePromotion/PromotionList.vue';
import CreatePromotion from '@/views/CreatePromotion/CreatePromotion.vue';
import Dashboard from '@/views/Dashboard/Dashboard.vue';
import OrderCooking from '@/views/OrderCooking/OrderCookingView.vue';
import OrderToDoList from '@/views/OrderToDoList/OrderToDoListView.vue';
import AllMenu from '@/views/Menu/AllMenuView.vue';
import DetailMenu from '@/views/Menu/DetailMenuView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/employee/order/serve',
      name: 'serve-order',
      component: ServeView,
    },
    {
      path: '/employee/order/order-history',
      name: 'order-history-list',
      component: HistoryView,
    },
    {
      path: '/employee/order/order-detail',
      name: 'order-detail',
      component: OrderView,
    },
    {
      path: '/employee/new-customer',
      name: 'new-customer',
      component: NewCustomerView,
    },
    {
      path: '/employee/new-customer/order-qrcode',
      name: 'order-qrcode',
      component: OrderQrCodeView,
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('@/views/reviews/CreateReviewView.vue'),
    },
    {
      path: '/reviews/thank-you',
      name: 'ThankYou',
      component: () => import('@/views/reviews/ThankYou.vue'),
    },
    {
      path: '/menu/all-promotion',
      name: 'AllPromotion',
      component: () => import('@/views/AllPromotionView.vue'),
    },
    {
      path: '/employee/payment/create-promptpay',
      name: 'promptPay.create',
      component: () => import('@/views/Payment/CreatePromptpayView.vue'),
    },
    {
      path: '/employee/payment/bill',
      name: 'bill',
      component: () => import('@/views/Payment/BillView.vue'),
    },
    {
      path: '/management/menu',
      name: 'MenuList',
      component: MenuList,
    },
    {
      path: '/management/menu/create-menu',
      name: 'CreateMenu',
      component: CreateMenu,
    },
    {
      path: '/management/promotion',
      name: 'PromotionList',
      component: PromotionList,
    },
    {
      path: '/management/promotion/create-promotion',
      name: 'CreatePromotion',
      component: CreatePromotion,
    },
    {
      path: '/management/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/management/create/manager-account',
      name: 'create-manager-account',
      component: () => import('@/views/Register/RegisterForManagerView.vue')
    },
    {
      path: '/employee/order/order-to-do/order-cooking',
      name: 'order-cooking',
      component: OrderCooking,
    },
    {
      path: '/employee/order/order-to-do',
      name: 'order-to-do',
      component: OrderToDoList,
    },
    {
      path: '/menu',
      name: 'menu',
      component: AllMenu,
    },
    {
      path: '/menu/detail',
      name: 'detail-menu',
      component: DetailMenu,
    },
  ],
});

export default router;
