import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Keeps from '../components/Keeps'
import Vaults from '../components/Vaults'
import Vault from '../components/Vault'
import store from '../store'

Vue.use(Router)
// export default new Router({
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      
    },
    {
      path: '/keeps',
      name: 'Keeps',
      component: Keeps,
      meta: { requiresAuth: true }
    },
    {
      path: '/vaults',
      name: 'Vaults',
      component: Vaults,
      meta: { requiresAuth: true }
    },
    {
      path: '/vaults/:id',
      name: 'Vault',
      component: Vault,
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { requiresAuth: true }

    },
    {
      path: '*',
      redirect: '/home'
    }
  ]

})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.user.id) {
      redirect: to.fullPath
      next()
    }
  } else {
    path: '/home';
    redirect: to.path
    next()
  }
})


export default router 
