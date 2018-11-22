import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/index.vue";
import DevCamp from "@/pages/devCamp.vue";
import NotFound from "@/pages/notFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dev-camp",
      name: "devCamp()",
      component: DevCamp
    },
    {
      path: "/hackathonusp",
      name: "HackathonUSP",
      beforeEnter() {
        location.href = "https://hackathon.ime.usp.br";
      }
    },
    {
      path: "/404",
      name: "404 Not Found",
      component: NotFound
    },
    {
      path: "*",
      name: "Redirect to 404 Not Found",
      redirect: "/404"
    }
  ]
});
