import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import LogIn from '../views/LogIn.vue'
import Autor from "../views/Autor"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/:name',
    name: 'autor',
    component: Autor
  }
]

const router = new VueRouter({
  routes
})

export default router
