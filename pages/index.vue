<template>
  <div class="container">
    <the-navbar/>
    <the-header/>
    <main>
      <about-code-lab/>
      <about-dev-journey/>
      <about-code-schools/>
      <about-hackathon-usp/>
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

<style lang="scss">
.container {
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
}

section {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  height: 100vh;
  padding: 1vh 2vh 1vh 2vh;
}

.section-title {
  flex: 1 1 100%;
  font-size: 1.8em;
  color: $main-color;
  padding-bottom: 0.3em;
}
</style>
