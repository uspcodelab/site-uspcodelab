import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./registerServiceWorker";
Vue.config.productionTip = false;

// Import Dependencies

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const VueScrollTo = require("vue-scrollto");

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faGitlab,
  faTelegram,
  faMedium
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEnvelope, faFacebook, faGithub, faGitlab, faMedium, faTelegram);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(VueScrollTo);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
