<template>
  <!-- <div class="container"> -->
  <b-container fluid>
    <the-navbar/>
    <b-row>
      <the-header/>
    </b-row>
    <main>
      <b-row>
        <about-code-lab/>
      </b-row>
      <!-- <b-row> -->
      <b-row>
        <div class="section-title">
          <h3>dev.journey()</h3>
        </div>
      </b-row>
      <about-dev-journey/>
      <!-- </b-row> -->
      <b-row>
        <about-code-schools/>
      </b-row>
      <b-row>
        <about-hackathon-usp/>
      </b-row>
    </main>
    <b-row>
      <the-footer/>
    </b-row>
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

section {
  font-size: 1em;
  height: 100vh;
  width: 100vw;
  padding: 1vh 2vh 1vh 2vh;
}

.section-title {
  // flex: 1 1 100%;
  font-size: 1.8em;
  color: $main-color;
  padding-bottom: 0.3em;
}
</style>
