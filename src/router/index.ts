import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/views/DetailEvent.vue')
    }
  ]
})

export default router
