import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/index.vue";
import DevCamp from "@/pages/devCamp.vue";

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
      path: "/devcamp",
      name: "devCamp()",
      component: DevCamp
    }
  ]
});
