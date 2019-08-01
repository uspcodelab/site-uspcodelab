<template>
  <main class="page">
    <the-header />
    <overview />
    <projects />
  </main>
</template>

<script>
import TheHeader from "@/components/dev-boost/TheHeader.vue";
import Overview from "@/components/dev-boost/BoostOverview.vue";
import Projects from "@/components/dev-boost/Projects.vue";

export default {
  components: {
    TheHeader,
    Overview,
    Projects
  }
};
</script>
