<template>
  <header id="head" class="header">
    <div class="header-background"/>
    <img src="~/assets/UCL-Logo_Text.svg" class="header-logo">
    <div style="z-index: 9; width: 90%">
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
}
.mobile-logo {
  z-index: 9;
  width: 100%;
  border-radius: 25%;
  display: none;
}
.header {
  position: relative;
  height: 100vh;
  overflow: hidden;
  padding-top: 9vh;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  border-bottom: 10em;
}

.header-background {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#ff8b46 0%, $main-color 100%);
  transform: skewY(-6deg);
  transform-origin: top left;
}

@media only screen and (max-device-width: 480px) {
  .mobile-logo {
    display: block;
  }
  .header-logo {
    display: none;
  }
}
</style>
