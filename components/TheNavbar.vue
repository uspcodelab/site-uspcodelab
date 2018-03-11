<template>
  <nav class="navbar">
    <!-- <a class="nav-logo" v-scroll-to="'#head'">USPCodeLab</a> -->
    <a v-scroll-to="'#head'" class="nav-logo" href="#">
      <img src="~/assets/UCL-Logo.svg">
    </a>

    <div class="nav-menu">
      <div v-for="btn in nav_buttons" :key="btn.key" class="nav-button">
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
        // { key: 1, text: "Home", section: "#home" },
        { key: 2, text: "Sobre", section: "#about" },
        { key: 3, text: "HackathonUSP", section: "#HackathonUSP" },
        { key: 4, text: "dev.journey", section: "#dev_journey" },
        { key: 5, text: "CodeSchools", section: "#CodeSchools" },
        { key: 6, text: "Contato", section: "#footer" }
      ]
    };
  }
};
</script>
