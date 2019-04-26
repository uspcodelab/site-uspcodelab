<template>
  <the-mobile-navbar v-if="isMobile" />
  <the-simple-navbar v-else />
</template>

<script>
import TheMobileNavbar from "@/components/TheMobileNavbar.vue";
import TheSimpleNavbar from "@/components/TheSimpleNavbar.vue";

export default {
  components: {
    TheMobileNavbar,
    TheSimpleNavbar
  },
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < 768;
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  }
};
</script>
