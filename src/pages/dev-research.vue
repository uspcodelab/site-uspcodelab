<template>
  <main class="page">
    <the-header />
    <ada-overview />
    <projects />
  </main>
</template>

<script>
import TheHeader from "@/components/dev-research/TheHeader.vue";
import AdaOverview from "@/components/dev-research/AdaOverview.vue";
import Projects from "@/components/dev-boost/Projects.vue";

export default {
  components: {
    TheHeader,
    AdaOverview,
    Projects
  }
};
</script>
