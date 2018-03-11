<template>
  <div class="container">
    <ucl-navbar/>
    <ucl-header/>
    <ucl-main/>
    <ucl-footer/>
  </div>
</template>

<script>
import uclNavbar from "../components/navbar.vue";
import uclHeader from "../components/header.vue";
import uclMain from "../components/main.vue";
import uclFooter from "../components/footer.vue";

export default {
  components: {
    uclNavbar,
    uclHeader,
    uclMain,
    uclFooter
  }
};
</script>
