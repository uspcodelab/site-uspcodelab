<template>
  <nav class="navbar">
    <!-- <a class="nav-logo" v-scroll-to="'#head'">USPCodeLab</a> -->
    <a v-scroll-to="'#head'" class="nav-logo" href="#">
      <img src="~/assets/UCL-Logo.svg">
    </a>

    <div class="nav-menu">
      <div v-for="btn in nav_buttons" :key="btn.KEY" class="nav-button">
        <a v-scroll-to="btn.section" class="nav-text" href="#">{{ btn.text }}</a>
        <div class="nav-line"/>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      nav_buttons: [
        // { KEY: 1, text: "Home", section: "#home" },
        { KEY: 2, text: "Sobre", section: "#about" },
        { KEY: 3, text: "HackathonUSP", section: "#HackathonUSP" },
        { KEY: 4, text: "dev.journey", section: "#dev_journey" },
        { KEY: 5, text: "CodeSchools", section: "#CodeSchools" },
        { KEY: 6, text: "Contato", section: "#footer" }
      ]
    };
  }
};
</script>

<style>
</style>
