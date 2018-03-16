<template>
  <b-navbar style="background-color: #ffffff;" fixed="top" type="light" toggleable>
    <b-navbar-brand v-scroll-to="'#head'">
      <img src="~/assets/UCL-Logo_Text.svg" alt="USPCodeLab" style="width: 60vw; border-radius: 15px; max-width: 200px;">
    </b-navbar-brand>
    <b-navbar-toggle target="nav_dropdown_collapse"/>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>
        <!-- <b-nav-item href="#" v-scroll-to="'#about'" style="color: white;">Sobre</b-nav-item> -->
        <b-nav-item href="#" v-scroll-to="'#dev-journey'">dev.journey()</b-nav-item>
        <b-nav-item href="#" v-scroll-to="'#CodeSchools'">CodeSchools</b-nav-item>
        <b-nav-item href="#" v-scroll-to="'#HackathonUSP'">HackathonUSP</b-nav-item>
        <b-nav-item href="#" v-scroll-to="'#footer'">Contato</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
</script>

<style lang="scss">
.navbar {
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  @media screen and (min-width: 1200px) {
    padding-left: calc(calc(100vw - 1200px) / 2);
  }
}
</style>
