import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrijavaNestanka from '../views/PrijavaNestanka.vue'
import PronadiLjubimca from '../views/PronadiLjubimca.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/prijavanestanka',
    name: 'prijavanestanka',
    component: PrijavaNestanka
  },
  {
    path: '/PronadiLjubimca',
    name: 'PronadiLjubimca',
    component: PronadiLjubimca
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
