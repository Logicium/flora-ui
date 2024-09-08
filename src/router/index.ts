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
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: () => import('../views/BlogPost.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      props: true,
      component: () => import('../views/ProductView.vue')
    }
  ]
})

export default router
