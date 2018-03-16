<template>
  <b-container fluid>
    <the-navbar/>
    <the-header/>
    <main>
      <about-dev-journey/>
      <about-code-schools/>
      <about-hackathon-usp/>
    </main>
    <the-footer/>
  </b-container>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue";
import TheNavbar from "~/components/TheNavbar.vue";
import TheFooter from "~/components/TheFooter.vue";

// import AboutCodeLab from "~/components/AboutCodeLab.vue";
import AboutHackathonUsp from "~/components/AboutHackathonUsp.vue";
import AboutDevJourney from "~/components/AboutDevJourney.vue";
import AboutCodeSchools from "~/components/AboutCodeSchools.vue";

export default {
  components: {
    TheNavbar,
    TheHeader,
    TheFooter,

    // AboutCodeLab,
    AboutHackathonUsp,
    AboutDevJourney,
    AboutCodeSchools
  }
};
</script>

<style lang="scss">
.container-fluid {
  padding: 0;
  margin: 0;
  // font-family: "Roboto", sans-serif;
  font-family: "IBM Plex Sans Condensed", sans-serif;
  // font-family: 'Open Sans', sans-serif;
  // font-family: 'Nunito', sans-serif;
  // font-family: 'Cabin', sans-serif;
  font-size: 16px;
}

section {
  font-size: 1em;
  height: 100vh;
  width: 100%;
}

.section-title {
  font-weight: bold;
  font-size: 4em;
  color: $main-color;
  padding-bottom: 0.3em;
  text-align: center;
}

p {
  text-align: left;
  word-wrap: break-word;
}

@media (max-width: 880px) {
  .section-title {
    font-size: 2.5em;
    color: $main-color;
    padding-bottom: 0.3em;
    text-align: center;
  }
}
</style>
