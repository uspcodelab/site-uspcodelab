<template>
  <div class="page">
    <the-navbar/>
    <b-container fluid>
      <main>
        <h1>dev.camp()</h1>
      </main>
      <the-footer/>
    </b-container>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheNavbar,
    TheFooter
  }
};
</script>
