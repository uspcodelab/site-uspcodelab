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

import devHackLogo from "@/assets/dev-journey/dev-hack.svg";
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
      reunionDays: "todas as quintas-feiras",
      reunionTime: "12h15",
      reunionLocal: "sala B7 do IME-USP",
      devJourneyStages: [
        {
          name: "dev.learn()",
          description:
            "Cursos sobre tecnologia onde os<br>participantes são introduzidos a ferramentas<br>e técnicas de desenvolvimento introdutórias<br>e avançadas.",
          imgUrl: devLearnLogo,
          imgAlt: "Ícone dev.learn()",
          to: "dev-camp",
          right: true
        },
        {
          name: "dev.boost()",
          description:
            "Grupos de estudos onde os participantes<br>praticam desenvolvimento de sistemas em<br>times com projetos de clientes externos<br>ou da universidade.",
          imgUrl: devBoostLogo,
          imgAlt: "Ícone dev.boost()",
          to: "dev-camp",
          right: false,
        },
        {
          name: "dev.hack()",
          description:
            "Hackathons onde os participantes são<br>desafiados a buscar, num tempo limitado,<br>soluções inovadoras para problemas reais<br>utilizando tecnologia.",
          imgUrl: devHackLogo,
          imgAlt: "Ícone dev.start()",
          to: "dev-camp",
          right: true
        },
        {
          name: "dev.camp()",
          description:
            "Escolas de férias voltadas ao<br>desenvolvimento de projetos em equipe<br>usando as tecnologias mais modernas.",
          imgUrl: devCampLogo,
          imgAlt: "Ícone dev.camp()",
          to: "dev-camp",
          right: false
        },
        {
          name: "dev.hire()",
          description:
            "Assessoria de carreira onde os participantes<br>assistem palestras preparatórias e conhecem<br>empresas parceiras com vagas de estágio<br>e emprego.",
          imgUrl: devHireLogo,
          imgAlt: "Ícone dev.hire()",
          to: "dev-camp",
          right: true,
          imgBackground: true
        },
        {
          name: "dev.research()",
          description:
            "Divisão de pesquisa onde os participantes da<br>graduação são co-orientados por pós-<br>graduandos em <b>ICs</b> ou <b>TCCs</b> nas áreas de<br>atuação do grupo.",
          imgUrl: devResearchLogo,
          imgAlt: "Ícone dev.research()",
          to: "dev-camp",
          right: false,
          imgBackground: true
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
