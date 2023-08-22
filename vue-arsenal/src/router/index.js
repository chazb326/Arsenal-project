import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayerDetails from '../views/players/PlayerDetails.vue'
import PlayersView from '../views/PlayersView.vue'
import FormView from '../views/FormView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/players',
    name: 'players',
    component: PlayersView
  },
  {
    path: '/players/:id',
    name: 'playerDetails',
    component: PlayerDetails,
    props: true
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
