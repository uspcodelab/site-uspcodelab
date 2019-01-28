<template>
  <div class="page">
    <the-navbar v-if="!this.$parent.isMobile()" :links="this.$parent.getNavLinks()"/>
    <mobile-menu v-else :links="this.$parent.getNavLinks()"/>
    <the-header/>
    <main>
      <about-dev-journey :dev-journey-stages="devJourneyStages"/>
      <reunion-call :days="reunionDays" :time="reunionTime" :local="reunionLocal"/>
      <about-hackathon-usp/>
    </main>
    <the-footer :social-medias="this.$parent.getSocialMedias()" />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

import AboutHackathonUsp from "@/components/index/AboutHackathonUsp.vue";
import AboutDevJourney from "@/components/index/AboutDevJourney.vue";
import ReunionCall from "@/components/index/ReunionCall.vue";

import devStartLogo from "@/assets/dev-journey/dev-start.svg";
import devLearnLogo from "@/assets/dev-journey/dev-learn.svg";
import devBoostLogo from "@/assets/dev-journey/dev-boost.svg";
import devHireLogo from "@/assets/dev-journey/dev-hire.svg";
import devResearchLogo from "@/assets/dev-journey/dev-research.svg";
import devCampLogo from "@/assets/dev-journey/dev-camp.svg";

export default {
  metaInfo: {
    title: "USPCodeLab - Estimulando a inovação tecnológica na USP!",
    meta: [
      {
        name: "description",
        content:
          "O USPCodeLab é um grupo de extensão sediado no IME-USP, cuja missão é estimular a " +
          "inovação tecnológica na universidade. Atualmente, fazemos isso através do dev.journey() - " +
          "que é composto por 6 partes: dev.learn(), dev.boost(), dev.hack(), dev.hire(), dev.camp() " +
          "e dev.research() - e de diversos hackathons e hackdays, sendo o HackathonUSP o maior evento."
      },
      {
        name: "keywords",
        content:
          "USPCodeLab, USPCodeLabs, CodeLab, CodeLabs, HackathonUSP, dev journey, IME, USP, hackathon"
      }
    ]
  },
  components: {
    TheNavbar,
    MobileMenu,
    TheHeader,
    TheFooter,

    AboutHackathonUsp,
    AboutDevJourney,
    ReunionCall
  },
  data() {
    return {
      reunionDays: "toda quinta-feira",
      reunionTime: "13h30",
      reunionLocal: "sala B7 do IME-USP",
      devJourneyStages: [
        {
          name: "dev.learn()",
          description:
            "<b>Cursos</b> sobre tecnologia onde os participantes são introduzidos a <b>ferramentas e técnicas de desenvolvimento</b> introdutórias e avançadas",
          imgUrl: devLearnLogo,
          imgAlt: "Ícone dev.learn()",
          to: ""
        },
        {
          name: "dev.boost()",
          description:
            "<b>Grupos de estudos</b> onde os participantes praticam <b>desenvolvimento de sistemas</b> em times com projetos de clientes externos ou da universidade",
          imgUrl: devBoostLogo,
          imgAlt: "Ícone dev.boost()",
          to: ""
        },
        {
          name: "dev.hack()",
          description:
            "<b>Hackathons</b> onde os participantes são desafiados a buscar, num tempo limitado, <b>soluções inovadoras</b> para problemas reais utilizando tecnologia",
          imgUrl: devStartLogo,
          imgAlt: "Ícone dev.start()",
          to: ""
        },
        {
          name: "dev.hire()",
          description:
            "<b>Assessoria de carreira</b> onde os participantes assistem palestras preparatórias e conhecem <b>empresas parceiras</b> com vagas de estágio e emprego",
          imgUrl: devHireLogo,
          imgAlt: "Ícone dev.hire()",
          to: ""
        },
        {
          name: "dev.camp()",
          description:
            "<b>Escolas de férias</b> onde os participantes trabalham num <b>projeto multi-time</b> similar ao de uma empresa com arquitetura de software moderna",
          imgUrl: devCampLogo,
          imgAlt: "Ícone dev.camp()",
          to: "dev-camp"
        },
        {
          name: "dev.research()",
          description:
            "<b>Divisão de pesquisa</b> onde os participantes da graduação são co-orientados por pós-graduandos em <b>ICs</b> ou <b>TCCs</b> nas áreas de atuação do grupo",
          imgUrl: devResearchLogo,
          imgAlt: "Ícone dev.research()",
          to: ""
        }
      ]
    };
  },
  mounted() {
    console.log(
      "%cBem vindo(a) ao site do USP%cCode%cLab!",
      "font-size:14px; font-weight: bold;",
      "color: #ff690a; font-weight:bold; font-size: 14px",
      "font-size:14px; font-weight: bold;"
    );
  }
};
</script>
