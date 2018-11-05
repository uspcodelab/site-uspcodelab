<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "assets/styles/tailwind.postcss";

html {
  font-size: 14px;
}

body {
  font-family: $font-family-base !important;
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
