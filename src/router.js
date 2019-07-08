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
    }
  ]
})
