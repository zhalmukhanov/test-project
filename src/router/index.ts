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
  },

  {
    path: '/feed',
    name: 'feed',
    component: () => import(/* webpackChunkName: "about" */ '../pages/FeedPage.vue')
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import(/* webpackChunkName: "about" */ '../pages/PostContentPage.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../pages/ProfilePage.vue')
  },

  {
    path: '/404',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "about" */ '../pages/NotFoundPage.vue'),
    meta: {
      layout: AppLayoutsEnum.empty
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(loadLayout)

export default router
