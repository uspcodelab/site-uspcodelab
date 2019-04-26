<template>
  <div>
    <the-navbar />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheNavbar,
    TheFooter
  },
  mounted() {
    console.log(
      "%cBem vindo(a) ao site do USP%cCode%cLab!",
      "font-size:14px; font-weight: bold;",
      "color: #ff690a; font-weight:bold; font-size: 14px",
      "font-size:14px; font-weight: bold;"
    );
  }
};
</script>
