import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/index.vue";
import DevLearn from "@/pages/devLearn.vue";
import DevHack from "@/pages/devHack.vue";
import About from "@/pages/about.vue";
import NotFound from "@/pages/notFound.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/dev-learn",
      name: "devLearn()",
      component: DevLearn,
    },
    {
      path: "/dev-hack",
      name: "devHack()",
      component: DevHack,
    },
    {
      path: "/about",
      name: "Sobre",
      component: About,
    },
    {
      path: "/hackathonusp",
      name: "HackathonUSP",
      beforeEnter() {
        location.href = "https://hackathon.ime.usp.br";
      },
    },
    {
      path: "*",
      name: "404 Not Found",
      component: NotFound,
    },
  ],
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  },
});
