import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/studio',
    name: 'Studio',
    component: () =>
      import(/* webpackChunkName: "studio" */ '../views/Studio.vue'),
  },
  {
    path: '/studio/content',
    name: 'Content',
    component: () =>
      import(/* webpackChunkName: "content" */ '../views/Content.vue'),
  },
  {
    path: '/account/restore',
    name: 'Accountlogin',
    component: () =>
      import(
        /* webpackChunkName: "Accountlogin" */ '../views/Accountlogin.vue'
      ),
  },
  {
    path: '/account/register',
    name: 'Accountregister',
    component: () =>
      import(
        /* webpackChunkName: "Accountregister" */ '../views/Accountregister.vue'
      ),
  },
  {
    path: '/account',
    name: 'Accountdashboard',
    component: () =>
      import(
        /* webpackChunkName: "Accountdashboard" */ '../views/Accountdashboard.vue'
      ),
  },
  {
    path: '/studio/create',
    name: 'Create',
    component: () =>
      import(/* webpackChunkName: "create" */ '../views/Create.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
