<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import navLinks from "@/json/navLinks.json";
import socialMedias from "@/json/socialMedias.json";

export default {
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
    getNavLinks() {
      return navLinks;
    },
    getSocialMedias() {
      return socialMedias;
    },
  },
};
</script>

<style lang="scss">
@import "assets/styles/tailwind.postcss";
// @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100&display=swap');

html {
  font-size: 14px;
}

body {
  font-family: $font-family-base !important;
}

.vue-typer .custom.char.typed {
  color: white;
}

.vue-typer .custom.char.selected {
  color: white;
}

.vue-typer .custom.char.selected {
  color: white;
}

.vue-typer .custom.caret {
  background-color: white;
}

.page {
  color: $ucl-light;
}

@media (min-width: 992px) {
  html {
    font-size: 16px;
  }
}

@media (min-width: 1200px) {
  html {
    font-size: 1.2vmax;
  }
}

@media (min-width: 1920px) {
  html {
    font-size: 1.1vmax;
  }
}

@media (min-width: 2560px) {
  html {
    font-size: 1vmax;
  }
}
</style>
