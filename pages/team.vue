<template>
  <div class="page">
    <the-navbar/>
    <b-container fluid>
      <main>
        <the-team />
      </main>
      <the-footer/>
    </b-container>
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue";
import TheNavbar from "~/components/TheNavbar.vue";
import TheFooter from "~/components/TheFooter.vue";
import TheTeam from "~/components/TheTeam.vue";

export default {
  components: {
    TheNavbar,
    TheHeader,
    TheFooter,
    TheTeam
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

@include media-breakpoint-up(lg) {
  html {
    font-size: 16px;
  }
}

@include media-breakpoint-up(xl) {
  html {
    font-size: 1.5vmax;
  }
}
</style>
