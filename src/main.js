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
import {
  faBars,
  faEnvelope,
  faExternalLinkAlt,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faDocker,
  faFacebook,
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedin,
  faLinux,
  faMedium,
  faNode,
  faReact,
  faTelegram,
  faTwitter,
  faVuejs
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faEnvelope,
  faExternalLinkAlt,
  faTimes,

  faDiscord,
  faDocker,
  faFacebook,
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedin,
  faLinux,
  faMedium,
  faNode,
  faReact,
  faTelegram,
  faTwitter,
  faVuejs
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

// vue-meta
import Meta from "vue-meta";
Vue.use(Meta);

// Vue

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
