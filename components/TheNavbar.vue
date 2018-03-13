<template>
  <!-- <nav class="navbar">
    <a v-scroll-to="'#head'" class="nav-logo" href="#">
      <img src="~/assets/UCL-Logo.svg">
    </a>

    <div class="nav-menu">
      <div v-for="btn in nav_buttons" :key="btn.key" class="nav-button">
        <a v-scroll-to="btn.section" class="nav-text" href="#">{{ btn.text }}</a>
        <div class="nav-line"/>
      </div>
    </div>
  </nav> -->
  <b-navbar style="background-color: #ffffff" fixed="top" type="light" toggleable>
    <b-navbar-brand v-scroll-to="'#head'">
      <img src="~/assets/UCL-Logo_Text.svg" alt="BV" style="width: 60%; height: 40%; border-radius: 15px">
    </b-navbar-brand>
    <b-navbar-toggle target="nav_dropdown_collapse"/>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>
        <b-nav-item href="#about" style="color: white;">Sobre</b-nav-item>
        <b-nav-item href="#dev_journey">dev.journey()</b-nav-item>
        <b-nav-item href="#CodeSchools">CodeSchools</b-nav-item>
        <b-nav-item href="#HackathonUSP">HackathonUSP</b-nav-item>
        <b-nav-item href="#footer" >Contato</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data: function() {
    return {
      nav_buttons: [
        // { key: 1, text: "Home", section: "#home" },
        { key: 2, text: "Sobre", section: "#about" },
        { key: 3, text: "dev.journey()", section: "#dev_journey" },
        { key: 4, text: "CodeSchools", section: "#CodeSchools" },
        { key: 5, text: "HackathonUSP", section: "#HackathonUSP" },
        { key: 6, text: "Contato", section: "#footer" }
      ]
    };
  }
};
</script>

<style lang="scss">
// .navbar {
//   // color: $secondary-color;

//   min-width: 100%;
//   height: 8vh;

//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: space-between;

//   position: fixed;
//   top: 0px;
//   left: 0px;
//   z-index: 10;

//   background-color: $terciary-color;
//   opacity: 0.95;
// }

// .nav-logo {
//   flex: 1 1;
//   opacity: 1;
//   margin: 0.8em;

//   img {
//     border-radius: 50%;
//   }
// }

// .nav-menu {
//   height: 100%;

//   margin-right: 1.2em;

//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: space-evenly;
//   align-items: center;
//   flex: 1 1 0;
// }

// .nav-button {
//   padding: 0 1em;

//   height: 100%;

//   background-size: 100% 200%;

//   display: flex;
//   flex-flow: column wrap;
//   justify-content: center;
//   align-items: center;
// }

// .nav-button:hover {
//   cursor: pointer;
// }

// .nav-line {
//   content: "";
//   display: block;
//   position: relative;
//   align-self: flex-start;

//   margin-top: 5px;
//   width: 0;
//   height: 5px;
//   background: $secondary-color;

//   transition: width 0.3s ease;
// }

// .nav-button:hover .nav-line {
//   width: 100%;
// }

// .nav-text {
//   color: white;
//   text-decoration: none;
//   font-size: 1.6em;
// }
</style>
