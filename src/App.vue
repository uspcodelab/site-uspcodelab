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
@import "assets/styles/tailwind";

body {
  font-family: $font-family-base !important;
  overflow-x: hidden !important;
}

html {
  font-size: 14px;
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

/*! purgecss start ignore */

.vue-typer .custom.char.typed {
  color: white;
}

.vue-typer .custom.char.selected {
  color: white;
}

.vue-typer .custom.caret {
  background-color: white;
}

.typed {
  color: white;
}

/*! purgecss end ignore */
</style>
