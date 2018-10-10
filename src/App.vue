<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  font-size: 14px;
}

body {
  font-family: $font-family-base !important;
}

.page {
  color: $ucl-light;
}

.title {
  color: $ucl-orange !important;
}

@media (min-width: 992px) {
  html {
    font-size: 16px;
  }
}

@media (min-width: 1200px) {
  html {
    font-size: 1.5vmax;
  }
}
</style>
