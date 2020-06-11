import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Services from '../views/Services.vue'
// import Contact from '../views/Contact.vue'

function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: lazyLoad('Home')
  },
  {
    path: '/services',
    name: 'Services',
    component: lazyLoad('Services')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: lazyLoad('Contact')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: lazyLoad('About')
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth'
      })
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
