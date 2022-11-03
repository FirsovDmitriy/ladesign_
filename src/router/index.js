import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('@/views/WorkPage')
  },
  {
    path: '/services-and-prices',
    name: 'servicesAndPrices',
    component: () => import('@/views/ServicesAndPricesPage'),
    meta: { test: true }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/ContactPage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  switch (to.name) {
    case 'home':
      store.state.innerPage = false
      break
    case 'works':
      store.state.innerPage = false
      break
    case 'servicesAndPrices':
      store.state.innerPage = true
      break
    case 'constacts':
      store.state.innerPage = true
      break
  }
})

export default router
