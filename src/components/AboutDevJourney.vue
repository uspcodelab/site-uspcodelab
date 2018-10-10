<template>
  <section id="dev-journey" class="dev-journey px-3 py-5 px-sm-5">
    <b-row>
      <b-col sm="12" class="py-5">
        <h1 class="title text-center pb-3">
          dev.journey()
        </h1>
        <p class="text-center">
          Programa de 6 fases que visa introduzir e amadurecer
          os conhecimentos dos alunos da USP sobre desenvolvimento
          de software
        </p>
      </b-col>

      <b-col sm="12" md="6" lg="3" offset-lg="1" class="dev-journey__info py-3 p-md-2">
        <b-card body-bg-variant="light" class="text-center">
          <img src="@/assets/dev-journey/dev-start.svg"
               class="dev-journey__info__icon p-4">
          <h3 class="dev-journey-phase">dev.start()</h3>
          Ciclo de oficinas de introdução à programação web
          para o público geral da universidade, com tópicos
          como HTML, CSS e JavaScript
        </b-card>
      </b-col>

      <b-col sm="12" md="6" lg="3" class="dev-journey__info py-3 p-md-2">
        <b-card body-bg-variant="light" class="text-center">
          <img src="@/assets/dev-journey/dev-learn.svg"
               class="dev-journey__info__icon p-4">
          <h3 class="dev-journey-phase">dev.learn()</h3>
          Grupos de estudo com reuniões semanais, ao longo
          de um semestre, para aplicar os conhecimentos
          em projetos propostos pela organização
        </b-card>
      </b-col>

      <b-col sm="12" md="6" lg="3" class="dev-journey__info py-3 p-md-2">
        <b-card body-bg-variant="light" class="text-center">
          <img src="@/assets/dev-journey/dev-boost.svg"
               class="dev-journey__info__icon p-4">
          <h3 class="dev-journey-phase">dev.boost()</h3>
          Grupo de estudos avançado, com projetos em times
          para aprendizado de técnicas de modelagem,
          implementação e manutenção de sistemas
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="12" md="6" lg="3" offset-lg="2" class="dev-journey__info py-3 p-md-2">
        <b-card body-bg-variant="light" class="text-center">
          <img src="@/assets/dev-journey/dev-hire.svg"
               class="dev-journey__info__icon p-4">
          <h3 class="dev-journey-phase">dev.hire()</h3>
          Iniciativa de captação de currículos de alunos,
          em particular dos participantes do programa,
          para facilitar o contato profissional
          com empresas parceiras
        </b-card>
      </b-col>

      <b-col sm="12" md="6" lg="3" class="dev-journey__info py-3 p-md-2">
        <b-card body-bg-variant="light" class="text-center">
          <img src="@/assets/dev-journey/dev-camp.svg"
               class="dev-journey__info__icon p-4">
          <h3 class="dev-journey-phase">dev.camp()</h3>
          Escola de férias (verão e inverno) que serve de formatura 
          para os alunos do dev.learn() e do dev.boost(): para o primeiro grupo, 
          é a primeira oportunidade de participar de um projeto de maior porte 
          envolvendo múltiplos times; para o segundo grupo, 
          é a chance de serem líderes de time sob as mesmas condições.
        </b-card>
      </b-col>

      <b-col sm="12" md="6" lg="3" class="dev-journey__info py-3 p-md-2">
        <b-card body-bg-variant="light" class="text-center">
          <img src="@/assets/dev-journey/dev-research.svg"
               class="dev-journey__info__icon p-4">
          <h3 class="dev-journey-phase">dev.research()</h3>
          Programa de pesquisa do USPCodeLab para ajudar 
          os participantes da dev.journey() a fazerem iniciações científicas, 
          propondo projetos de pesquisa relacionados aos temas de estudo do grupo. 
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<style lang="scss">
.dev-journey {
  color: $ucl-black;
  background-color: $ucl-light;

  &__info {
    display: inline-flex;

    &__icon {
      max-width: 80%;
    }
  }
}
</style>
