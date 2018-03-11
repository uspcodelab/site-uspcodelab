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

<style lang="scss">
.navbar {
  color: $secondary-color;

  font-size: 1.2em;

  min-width: 100%;
  height: 8vh;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  // align-items: center;

  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;

  background-color: #292827;
  opacity: 0.95;
}

.nav-logo {
  flex: 1 1;
  opacity: 1;
  border-radius: 10px;

  img {
    margin: 10px;
    border-radius: 40px;
  }
}

.nav-menu {
  height: 100%;

  margin-right: 1.2em;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  flex: 1 1 0;
}

.nav-button {
  padding: 5em 1em;

  height: 100%;

  background-size: 100% 200%;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

.nav-button:hover {
  cursor: pointer;
}

.nav-line {
  content: "";
  display: block;
  position: relative;
  align-self: flex-start;

  margin-top: 5px;
  width: 0;
  height: 5px;
  background: #000;

  transition: width 0.3s ease;
}

.nav-button:hover .nav-line {
  width: 100%;
}

a {
  color: white;
  text-decoration: none;
}
</style>
