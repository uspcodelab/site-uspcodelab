<template>
  <div class="page">
    <the-navbar/>
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
import TheHeader from "@/components/TheHeader.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheMap from "@/components/TheMap.vue";

import AboutHackathonUsp from "@/components/AboutHackathonUsp.vue";
import AboutDevJourney from "@/components/AboutDevJourney.vue";
import AboutDevCamp from "@/components/AboutDevCamp.vue";

export default {
  components: {
    TheNavbar,
    TheHeader,
    TheFooter,
    TheMap,

    AboutHackathonUsp,
    AboutDevJourney,
    AboutDevCamp
  }
};
</script>

<style lang="scss">
html {
  font-size: 14px;
}

.page {
  padding-top: 4rem;
}

@media (min-width: 992px) {
  html {
    font-size: 16px;
  }
}

@media (min-width: 1200px) {
  html {
    font-size: 1.5vmax;
  }
}
</style>
