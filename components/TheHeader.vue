<template>
  <header id="head" class="header">
    <div class="header-background"/>
    <!-- <h1 class="title">USPCodeLab</h1> -->
    <img src="~/assets/UCL-Logo-Text.png"
         style="z-index: 9; background-color: #ffffff; border-radius: 15px">
  </header>
</template>

<style lang="scss">
.header {
  position: relative;
  height: 100vh;
  overflow: hidden;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

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
</style>
