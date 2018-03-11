<template>
  <div class="container">
    <the-navbar/>
    <the-header/>
    <main>
      <about-code-lab/>
      <about-hackathon-usp/>
      <about-dev-journey/>
      <about-code-schools/>
    </main>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue";
import TheNavbar from "~/components/TheNavbar.vue";
import TheFooter from "~/components/TheFooter.vue";

import AboutCodeLab from "~/components/AboutCodeLab.vue";
import AboutHackathonUsp from "~/components/AboutHackathonUsp.vue";
import AboutDevJourney from "~/components/AboutDevJourney.vue";
import AboutCodeSchools from "~/components/AboutCodeSchools.vue";

export default {
  components: {
    TheNavbar,
    TheHeader,
    TheFooter,

    AboutCodeLab,
    AboutHackathonUsp,
    AboutDevJourney,
    AboutCodeSchools
  }
};
</script>
