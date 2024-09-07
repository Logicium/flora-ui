import { createRouter, createWebHistory } from 'vue-router'
import Flora from '../Flora.vue'
import GridView from "../views/GridView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GridView
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
      name: 'blog',
      component: () => import('../views/BlogView.vue')
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
