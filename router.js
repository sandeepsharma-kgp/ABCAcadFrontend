import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const base = 
    process.env.NODE_ENV === "production"
    ? "/ABCACADFRONTEND"
    : "/";

export default new Router({
    mode: "history",
    base,
    routes: [
        {
          path: "/",
          name: "home",
          meta: { layout: "Default" },
          component: require("@/pages/Advertisements.vue").default // load sync home
        },
        {
          path: "/photos",
          name: "photos",
          component: () => import("@/pages/Photos.vue")
        },
        {
          path: "/about-us",
          name: "about",
          meta: { layout: "no-sidebar" },
          component: () => import("@/views/About.vue")
        },
        {
          path: "/story/:id",
          name: "post",
          component: () => import("@/pages/Blogs.vue")
        },
        {
          path: "*",
          name: "404*",
          component: require("@/pages/404.vue").default // load sync home
        }
      ]
});