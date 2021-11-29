import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/anime-episodes',
    name: 'AnimeEpisodes',
    component: () => import('../views/AnimeEpisodes.vue')
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () => import('../views/Contato.vue')
  },
  {
    path: '/photos',
    name: 'Photos',
    component: () => import('../views/Photos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
