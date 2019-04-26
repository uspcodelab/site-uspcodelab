<template>
  <section class="section section--light">
    <h1 class="title">
      dev.journey()
    </h1>
    <p class="description description--short">
      <strong>Programa educacional</strong> com 6 iniciativas que visa
      complementar a formação dos estudantes para que eles se tornem
      <strong>engenheiros de software</strong> capazes de desenvolverem sistemas
      reais
    </p>
    <card-list :array="devJourneyStages" />
  </section>
</template>

<script>
import CardList from "@/components/util/CardList.vue";

import devLearnLogo from "@/assets/dev-journey/dev-learn.svg";
import devBoostLogo from "@/assets/dev-journey/dev-boost.svg";
import devCampLogo from "@/assets/dev-journey/dev-camp.svg";
import devHackLogo from "@/assets/dev-journey/dev-hack.svg";
import devHireLogo from "@/assets/dev-journey/dev-hire.svg";
import devResearchLogo from "@/assets/dev-journey/dev-research.svg";

export default {
  components: {
    CardList
  },
  data() {
    return {
      devJourneyStages: [
        {
          title: "dev.learn()",
          description:
            "<strong>Cursos sobre tecnologia</strong> onde os participantes são introduzidos a <strong>ferramentas e técnicas</strong> de desenvolvimento tanto introdutórias quanto avançadas",
          imgUrl: devLearnLogo,
          imgAlt: "Ícone dev.learn()",
          imgClass: "mt-6 h-32",
          linkTo: ""
        },
        {
          title: "dev.boost()",
          description:
            "<strong>Grupos de estudos</strong> onde os participantes praticam <strong>desenvolvimento de sistemas</strong> em times com projetos de clientes externos ou da universidade",
          imgUrl: devBoostLogo,
          imgAlt: "Ícone dev.boost()",
          imgClass: "mt-6 h-32",
          linkTo: ""
        },
        {
          title: "dev.camp()",
          description:
            "<strong>Escolas de férias</strong> onde os participantes trabalham num <strong>projeto multi-time</strong> como o de uma empresa com arquitetura de software moderna",
          imgUrl: devCampLogo,
          imgAlt: "Ícone dev.camp()",
          imgClass: "mt-6 h-32",
          linkTo: "dev-camp"
        },
        {
          title: "dev.hack()",
          description:
            "<strong>Hackathons e hackdays</strong> onde os participantes são desafiados a buscar, num tempo limitado, <strong>soluções inovadoras</strong> para problemas reais usando tecnologia",
          imgUrl: devHackLogo,
          imgAlt: "Ícone dev.start()",
          imgClass: "mt-6 h-32",
          linkTo: ""
        },
        {
          title: "dev.hire()",
          description:
            "<strong>Assessoria de carreira</strong> onde os participantes assistem palestras preparatórias e conhecem <strong>empresas parceiras</strong> com vagas de estágio e emprego",
          imgUrl: devHireLogo,
          imgAlt: "Ícone dev.hire()",
          imgClass: "mt-6 h-32",
          linkTo: ""
        },
        {
          title: "dev.research()",
          description:
            "<strong>Divisão de pesquisa</strong> onde os participantes da graduação são co-orientados por pós-graduandos em <strong>ICs e TCCs</strong> nas áreas de atuação do grupo",
          imgUrl: devResearchLogo,
          imgAlt: "Ícone dev.research()",
          imgClass: "mt-6 h-32",
          linkTo: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
.section {
  @apply bg-ucl-white;
}

.title {
  @apply text-ucl-orange;
}

.description {
  @apply text-ucl-black;
}
</style>
