import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./registerServiceWorker";
Vue.config.productionTip = false;

// vue-scrollto

const VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);

// FontsAwesome

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faGitlab,
  faTelegram,
  faMedium
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faEnvelope,
  faFacebook,
  faGithub,
  faGitlab,
  faMedium,
  faTelegram,
  faTimes
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// vue-carousel

import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

// v-scroll-lock

import VScrollLock from "v-scroll-lock";
Vue.use(VScrollLock);

// Scroll directive

Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});

// Vue

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
