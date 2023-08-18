import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutPage.vue'),
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: () => import('../views/ContactsPage.vue'),
		},
		{
			path: '/menu',
			name: 'menu',
			component: () => import('../views/MenuPage.vue'),
		},
		{
			path: '/one',
			name: 'one',
			component: () => import('../views/OneColumn.vue'),
		},
		{
			path: '/two',
			name: 'two',
			component: () => import('../views/TwoColumn.vue'),
		},
		{
			path: '/sidebar',
			name: 'sidebar',
			component: () => import('../views/SidebarPost.vue'),
		},
	],
})

export default router
