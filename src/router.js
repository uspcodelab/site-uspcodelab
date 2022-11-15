import { createWebHistory, createRouter } from "vue-router";

import Home from "@/pages/index.vue";
import DevCamp from "@/pages/devCamp.vue";
import NotFound from "@/pages/notFound.vue";
import Hackathons from "@/pages/hackathons.vue"

export default createRouter({
  mode: "hash",
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/dev-camp",
      name: "devCamp()",
      component: DevCamp,
    },
    {
      path: "/hackathons",
      name: "Hackathons",
      component: Hackathons,
    },
    {
      path: "/:catchAll(.*)",
      name: "404 Not Found",
      component: NotFound,
    },
  ],
});
