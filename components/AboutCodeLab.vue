<template>
  <section id="about" class="about">
    <div class="section-title">
      <h3>Quem somos?</h3>
    </div>
    <div id="about-text">
      O USPCodeLab (UCL) é um grupo de extensão universitária com o objetivo  de criar um espaço colaborativo para o desenvolvimento de tecnologia na universidade, com nossos grupos de estudo, e oferecer aprendizado na área de Engenharia de Software.
    </div>
  </section>
</template>

<style lang="scss">
.about {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  font-size: 1.1em;
  height: 100vh;
  padding: 10vh 2vh;
  align-items: center;
  // background configuration
  background-image: url("~/assets/UCL-Logo-Translucid.svg");
  background-color: rgba(255, 255, 255, 0.452);
  background-repeat: no-repeat;
  background-size: 100vh;
}
.ucl-logo {
  z-index: 9;
  border-radius: 100%;
  width: 25%;
}
</style>
