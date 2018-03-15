<template>
  <!-- <div class="container"> -->
  <b-container fluid>
    <the-navbar/>
    <the-header/>
    <main>
      <!-- <about-code-lab/> -->
      <about-dev-journey/>
      <about-code-schools/>
      <about-hackathon-usp/>
    </main>
    <the-footer/>
  <!-- </div> -->
  </b-container>
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
// .container {
//   display: flex;
//   flex-flow: column nowrap;
//   overflow: hidden;
//   justify-content: center;
//   align-items: center;
//   font-size: 16px;
//   font-family: "Roboto", sans-serif;
// }
.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
}

section {
  font-size: 0.8em;
  height: 100vh;
  width: 100vw;
}

.section-title {
  // flex: 1 1 100%;
  font-size: 1.8em;
  color: $main-color;
  padding-bottom: 0.3em;
  text-align: center;
}

.white {
  color: $secondary-color;
}

p {
  text-align: justify;
}
</style>
