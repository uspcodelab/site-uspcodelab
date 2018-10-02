import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./registerServiceWorker";
Vue.config.productionTip = false;

// bootstrap-vue

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

// vue-scrollto

const VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);

// FontsAwesome

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

// vue-carousel

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

// Vue

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
