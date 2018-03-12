<template>
  <header id="head" class="header">
    <!-- <img src="~/assets/UCL-Logo_Text.svg" class="header-logo"> -->
    <div style="z-index: 9; margin: auto">
      <img src="~/assets/UCL-Logo.svg" class="mobile-logo">
    </div>
  </header>
</template>

<style lang="scss">
.header-logo {
  z-index: 9;
  background-color: #ffffff;
  border-radius: 15px;
  width: 65%;
  margin: auto;
}
.mobile-logo {
  z-index: 9;
  width: 70vw;
  max-width: 700px;
  border-radius: 50%;
  margin: auto;
  // display: none;
}
.header {
  display: flex;
  height: 100vh;
  width: 100%;
  padding-top: 9vh;
  border-bottom: 10em;
  background-image: linear-gradient(#ff8b46 0%, $main-color 100%);
  // justify-content: center;
  // align-items: center;
}

// .header-background {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: linear-gradient(#ff8b46 0%, $main-color 100%);
//   transform: skewY(-6deg);
//   transform-origin: top left;
// }

@media only screen and (max-device-width: 480px) {
  .mobile-logo {
    display: block;
  }
  .header-logo {
    display: none;
  }
}
</style>
