<template>
  <nav class="navbar">
    <div class="nav-logo">USPCodeLab</div>
    <div class="nav-menu">
      <div v-for="btn in nav_buttons" :key="btn.KEY" class="nav-button">
        <div class="nav-text">{{ btn.text }}</div>
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
        { KEY: 1, text: "Home" },
        { KEY: 2, text: "Sobre" },
        { KEY: 3, text: "HackathonUSP" },
        { KEY: 4, text: "dev.journey" },
        { KEY: 5, text: "CodeSchools" },
        { KEY: 6, text: "Contato" }
      ]
    };
  }
};
</script>

<style>

</style>
