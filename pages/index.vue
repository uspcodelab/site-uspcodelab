<template>
  <div class="container">
    <the-navbar/>
    <the-header/>
    <the-main/>
    <the-footer/>
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import TheHeader from "../components/TheHeader.vue";
import TheMain from "../components/TheMain.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  components: {
    TheNavbar,
    TheHeader,
    TheMain,
    TheFooter
  }
};
</script>
