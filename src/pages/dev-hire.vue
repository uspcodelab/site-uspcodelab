<template>
  <main class="page">
    <the-header />
    <events/>
  </main>
</template>

<script>
import TheHeader from "@/components/dev-hire/TheHeader.vue";
import Events from "@/components/dev-hire/Events.vue";

export default {
  components: {
    TheHeader,
    Events,
  }
};
</script>
