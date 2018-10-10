<template>
  <div class="page">
    <the-navbar v-if="!isMobile()"/>
    <mobile-menu v-else :links="links"/>
    <b-container fluid>
      <the-header/>
      <main>
        <about-dev-journey/>
        <about-dev-camp/>
        <about-hackathon-usp/>
      </main>
      <the-footer/>
    </b-container>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheMap from "@/components/TheMap.vue";

import AboutHackathonUsp from "@/components/AboutHackathonUsp.vue";
import AboutDevJourney from "@/components/AboutDevJourney.vue";
import AboutDevCamp from "@/components/AboutDevCamp.vue";

export default {
  components: {
    TheNavbar,
    MobileMenu,
    TheHeader,
    TheFooter,
    TheMap,

    AboutHackathonUsp,
    AboutDevJourney,
    AboutDevCamp
  },
  data() {
    return {
      links: [
        { url: "/", name: "Início" },
        { url: "devcamp()", name: "dev.camp()" },
        { url: "hackathonusp", name: "HackathonUSP" }
      ]
    };
  },
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
