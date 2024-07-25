import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { loadLayout } from './middleware/loadLayout'
import { AppLayoutsEnum } from '@/shared/types'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      layout: AppLayoutsEnum.login
    }
  },

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../pages/LoginPage.vue'),
    meta: {
      layout: AppLayoutsEnum.login
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../pages/SignupPage.vue'),
    meta: {
      layout: AppLayoutsEnum.login
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(loadLayout)

export default router
