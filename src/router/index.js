import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import(/* webpackChunkName: "about" */ '../views/Upload.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
