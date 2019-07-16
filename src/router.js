import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",

  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: "Default"},
      component: require("@/pages/Home.vue").default
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      meta: {layout: "Default"},
      component: () => import(/* webpackChunkName: "about" */ './pages/About.vue')
    },
    {
      path: '/program8_9',
      name: 'program8_9',
      meta: {layout: "Default"},
      component: () => import('./pages/Program8_9.vue')
    },
    {
      path: '/program11_12',
      name: 'program11_12',
      meta: {layout: "Default"},
      component: () => import('./pages/Program11_12.vue')
    },
    {
      path: '/program9_10',
      name: 'program9_10',
      meta: {layout: "Default"},
      component: () => import('./pages/Program9_10.vue')
    }
  ]
})
