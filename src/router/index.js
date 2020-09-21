import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import UserProfile from '../views/UserProfile.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props:true
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: UserProfile
  },
]

const router = new VueRouter({
  routes
})

export default router
