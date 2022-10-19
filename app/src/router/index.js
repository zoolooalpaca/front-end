import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AllEmployeeView from '@/views/Employees/AllEmployeeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: 'employees',
      name: 'allEmployee',
      component: AllEmployeeView
    }
  ]
})

export default router
