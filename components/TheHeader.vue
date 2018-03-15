<template>
  <header id="head" class="header">
    <b-row style="padding: 10px;">
      <b-col style="max-width: 600px; max-height: 400px; text-align: justify;">
        <h3>
          O USPCodeLab (UCL) é um grupo de extensão universitária com o objetivo  de criar um espaço colaborativo para o desenvolvimento de tecnologia na universidade, com nossos grupos de estudo, e oferecer aprendizado na área de Engenharia de Software.
        </h3>
      </b-col>

      <b-col style="max-width: 400px; max-height: 400px; text-align: center;">
        <div style="z-index: 9;">
          <img src="~/assets/UCL-Logo.svg" class="mobile-logo">
        </div>
      </b-col>
    </b-row>
    <!-- <img src="~/assets/UCL-Logo_Text.svg" class="header-logo"> -->
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
  max-width: 400px;
  border-radius: 50%;
  margin: auto;
  // display: none;
}
.header {
  display: flex;
  height: 100vh;
  width: 100%;
  padding-top: 10vh;
  border-bottom: 10em;
  background-image: linear-gradient(#ff8b46 0%, $main-color 100%);

  .row {
    justify-content: space-around;
    width: 100%;
    align-items: center;
  }
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
</style>
