<template>
  <section id="about" class="about">
    <!-- <div class="about"> -->
    <div class="section-title">
      <h3>Quem somos?</h3>
    </div>
    <div id="about-text">
      O USPCodeLab (UCL) é um grupo de extensão universitária com o objetivo  de criar um espaço colaborativo para o desenvolvimento de tecnologia na universidade. Para isso, atua em duas frentes: uma voltada para alunos de cursos de tecnologia (Ciência da Computação, Engenharia da Computação, Sistemas da Informação, etc.), com foco em ajudá-los a se tornarem engenheiros de software capazes de utilizar as melhores ferramentas e técnicas de desenvolvimento disponíveis; e outra para o público geral interessado, para difundir o uso de tecnologia para criação de soluções em suas respectivas áreas.
    </div>
    <!-- </div> -->
    <!-- <img src="~/assets/UCL-Logo.svg" class="ucl-logo"> -->
  </section>
</template>

<style lang="scss">
.about {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  font-size: 1.1em;
  text-align: justify;
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
