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
          "que é composto por 6 partes: dev.start(), dev.learn(), dev.boost(), dev.hire(), dev.camp() " +
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
          name: "dev.start()",
          description:
            "Ciclo de oficinas de introdução à programação web \
          para o público geral da universidade, com tópicos \
          como HTML, CSS e JavaScript",
          imgUrl: devStartLogo,
          imgAlt: "Ícone dev.start()"
        },
        {
          name: "dev.learn()",
          description:
            "Grupos de estudo com reuniões semanais, ao longo \
          de um semestre, para aplicar os conhecimentos \
          em projetos propostos pela organização",
          imgUrl: devLearnLogo,
          imgAlt: "Ícone dev.learn()"
        },
        {
          name: "dev.boost()",
          description:
            "Grupo de estudos avançado, com projetos em times \
          para aprendizado de técnicas de modelagem, \
          implementação e manutenção de sistemas",
          imgUrl: devBoostLogo,
          imgAlt: "Ícone dev.boost()"
        },
        {
          name: "dev.hire()",
          description:
            "Iniciativa de captação de currículos de alunos, \
          em particular dos participantes do programa, \
          para facilitar o contato profissional \
          com empresas parceiras",
          imgUrl: devHireLogo,
          imgAlt: "Ícone dev.hire()"
        },
        {
          name: "dev.camp()",
          description:
            "Escola de férias que serve de formatura para os \
            alunos do dev.learn() e dev.boost() envolvendo um \
            projeto grande com múltiplos times",
          imgUrl: devCampLogo,
          imgAlt: "Ícone dev.camp()"
        },
        {
          name: "dev.research()",
          description:
            "Ciclo de oficinas de introdução à programação web \
            para o público geral da universidade, com tópicos \
            como HTML, CSS e JavaScript",
          imgUrl: devResearchLogo,
          imgAlt: "Ícone dev.research()"
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
