import { createRouter, createWebHistory } from 'vue-router'
import Flora from '../Flora.vue'
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/shop/ContactView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/shop/AboutView.vue')
    },
    {
      path: '/blog',
      component: () => import('../views/blog/BlogView.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: () => import('../views/blog/BlogPost.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/user/AccountView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/shop/CartView.vue')
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: () => import('../views/shop/FaqsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/user/LoginView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/user/LogoutView.vue')
    },
    {
      path: '/orders',
      name: 'order',
      component: () => import('../views/user/OrdersView.vue')
    },
    {
      path: '/prefs',
      name: 'prefs',
      component: () => import('../views/user/PrefsView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      props: true,
      component: () => import('../views/shop/ProductView.vue')
    }
  ]
})

export default router
