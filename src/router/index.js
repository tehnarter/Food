import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutPage.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsPage.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuPage.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('../views/BlogsPage.vue')
    }
  ]
})

export default router
