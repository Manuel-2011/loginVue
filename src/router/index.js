import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      reqAuth: true // se escribe propiedad para determinar que requiere autenticación
    }
  },
  {
    path: '/',
    name: 'Login',
    // it uses an arrow function instead to make the component load in a lazy way
    component: () => 
      import(/* webpackChunkName: "loginC" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    // it uses an arrow function instead to make the component load in a lazy way
    component: () => 
      import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// global navigation guard to prevent users that have not been logged in to go to home page
router.beforeEach((to, from, next) => {
  if (to.meta.reqAuth) {
    if (localStorage.getItem('jwt')) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router
