import { createApp } from "vue";
import { createMetaManager } from 'vue-meta'
import App from "./App.vue";
import router from "./router";

import "./style.css";

import VueScrollTo from "vue-scrollto";
import VueCarousel from "vue-carousel";
import VScrollLock from "v-scroll-lock";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faEnvelope,
  faExternalLinkAlt,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faGitlab,
  faTelegram,
  faMedium,
  faDiscord,
  faDocker,
  faLinux,
  faNode,
  faReact,
  faVuejs
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
  faTimes,
  faDiscord,
  faDocker,
  faLinux,
  faNode,
  faReact,
  faVuejs,
  faExternalLinkAlt
);

// Vue.config.productionTip = false;

// Vue
createApp(App)
  .use(VScrollLock)
  .use(VueCarousel)
  .use(VueScrollTo)
  .use(router)
  .use(createMetaManager())
  .component('font-awesome-icon', FontAwesomeIcon)
  .directive("scroll", {
    inserted: function (el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener("scroll", f);
        }
      };
      window.addEventListener("scroll", f);
    }
  })
  .mount("#app")
