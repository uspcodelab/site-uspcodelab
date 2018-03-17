<template>
  <section id="dev-journey" class="dev-journey-section">
    <b-row>
      <b-col>
        <h3 class="section-title" style="color: #FF690A">dev.journey( )</h3>
      </b-col>
    </b-row>

    <b-row>
      <b-col xs="12" sm="6" md="6" lg="3" class="dev-journey-info">
        <b-card>
          <div class="dev-journey-info-icon">
            <img src="~/assets/play-button-sing.svg">
          </div>
          <h4 class="dev-journey-phase">dev.start()</h4>
          <p>
            Ciclo de oficinas para apresentar programação web para o público geral da universidade, com tópicos como HTML, CSS e JavaScript
          </p>
        </b-card>
      </b-col>

      <b-col xs="12" sm="6" md="6" lg="3" class="dev-journey-info">
        <b-card>
          <div class="dev-journey-info-icon">
            <img src="~/assets/study.svg">
          </div>
          <div>
            <h4 class="dev-journey-phase">dev.learn()</h4>
            <p>
              Um dos nossos grupos de estudo com reuniões semanais, ao longo de um semestre, para aplicar os conhecimentos em projetos propostos pela organização
            </p>  
          </div>
        </b-card>
      </b-col>
      
      <b-col xs="12" sm="6" md="6" lg="3" class="dev-journey-info">
        <b-card>
          <div class="dev-journey-info-icon">
            <img src="~/assets/startup.svg">
          </div>
          <h4 class="dev-journey-phase">dev.boost()</h4>
          <p>
            Uma continuação da fase anterior, agora com projetos em times, voltada para aprendizado de técnicas de modelagem, implementação e manutenção de sistemas
          </p>
        </b-card>
      </b-col>

      <b-col xs="12" sm="6" md="6" lg="3" class="dev-journey-info">
        <b-card>
          <div class="dev-journey-info-icon">
            <img src="~/assets/resume.svg">
          </div>
          <h4 class="dev-journey-phase">dev.hire()</h4>
          <p>
            Nosso programa de captação de currículos de alunos, em particular os participantes do programa, para facilitar o contato profissional com empresas parceiras
          </p> 
        </b-card>
      </b-col>
      
    </b-row>
  </section>
  
</template>

<script>
</script>

<style lang="scss">
.dev-journey-section {
  background: $secondary-color;
  color: #2c2c2c;

  width: 100%;
  font-size: 1.1em;
  height: 100%;
  padding: 20vh 2vh;

  @media screen and (min-width: 1200px) {
    padding-left: calc(calc(100vw - 1200px) / 2);
    padding-right: calc(calc(100vw - 1200px) / 2);
  }
}

.dev-journey-info {
  padding: 0 1vw;
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
  display: inline-flex;

  h3 {
    font-size: 2em;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
}

.dev-journey-info-icon {
  padding: 5vh 0vh;
  fill: $secondary-color;
  img {
    width: 10em;
  }
}

.dev-journey-info h4 {
  padding: 3vh 0vh 2vh 0vh;
  font-size: 2em;
}

.dev-journey-info p {
  text-align: center;
}

.card-body {
  height: 100%;
}
</style>
