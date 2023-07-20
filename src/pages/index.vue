<template>
  <div class="page">
    <the-navbar
      v-if="!this.$parent.isMobile()"
      :links="this.$parent.getNavLinks()"
    />
    <mobile-menu v-else :links="this.$parent.getNavLinks()" />
    <the-header />
    <main>
      <about-us />
      <reunion-call
        :days="reunionDays"
        :time="reunionTime"
        :local="reunionLocal"
      />
      <about-dev-journey :dev-journey-stages="devJourneyStages" />
    </main>
    <the-footer :social-medias="this.$parent.getSocialMedias()" />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

import AboutDevJourney from "@/components/index/AboutDevJourney.vue";
import AboutUs from "@/components/index/AboutUs";
import ReunionCall from "@/components/index/ReunionCall.vue";

import devHackLogo from "@/assets/dev-journey/dev-hack.svg";
import devLearnLogo from "@/assets/dev-journey/dev-learn.svg";
import devBoostLogo from "@/assets/dev-journey/dev-boost.svg";
import devHireLogo from "@/assets/dev-journey/dev-hire.svg";
import devResearchLogo from "@/assets/dev-journey/dev-research.svg";
import devCampLogo from "@/assets/dev-journey/dev-camp.svg";


export default {
  metaInfo: {
    title: "USPCodeLab Butantã - Estimulando a inovação tecnológica na USP!",
    meta: [
      {
        name: "description",
        content:
          "O USPCodeLab Butantã é um grupo de extensão sediado no IME-USP, cuja missão é estimular a " +
          "inovação tecnológica na universidade. Atualmente, fazemos isso através do dev.journey() - " +
          "que é composto por 6 partes: dev.learn(), dev.boost(), dev.hack(), dev.hire(), dev.camp() " +
          "e dev.research().",
      },
      {
        name: "keywords",
        content:
          "USPCodeLab, USPCodeLabs, CodeLab, CodeLabs, Codelab Butantã, USPCodelab Butantã, dev journey, IME, USP, hackathon",
      },
    ],
  },
  components: {
    TheNavbar,
    MobileMenu,
    TheHeader,
    TheFooter,
    AboutDevJourney,
    AboutUs,
    ReunionCall,
  },
  data() {
    return {
      reunionDays: "todas as sextas-feiras",
      reunionTime: "13h00",
      reunionLocal: "sala B6 do IME-USP",
      devJourneyStages: [
        {
          name: "dev.learn( )",
          description:
          "Cursos sobre tecnologia onde os participantes são introduzidos a ferramentas e técnicas de desenvolvimento <span class=\"text-ucl-orange\"> introdutórias e avançadas</span>.",
          imgUrl: devLearnLogo,
          imgAlt: "Ícone dev.learn()",
          to: "dev-learn",
          right: true,
        },
        {
          name: "dev.boost( )",
          description:
          "Grupos de estudos onde os participantes praticam <span class=\"text-ucl-orange\"> desenvolvimento de sistemas em times </span> com projetos de clientes externos ou da universidade.",
          imgUrl: devBoostLogo,
          imgAlt: "Ícone dev.boost()",
          to: "",
          right: false,
        },
        {
          name: "dev.hack( )",
          description:
          "Hackathons onde os participantes são desafiados a buscar, num tempo limitado,<span class=\"text-ucl-orange\"> soluções inovadoras </span> para problemas reais utilizando tecnologia.",
          imgUrl: devHackLogo,
          imgAlt: "Ícone dev.hack()",
          to: "dev-hack",
          right: true,
        },
        {
          name: "dev.camp( )",
          description:
          "Escolas de férias voltadas ao desenvolvimento de projetos em equipe usando as<span class=\"text-ucl-orange\"> tecnologias mais modernas</span>.",
          imgUrl: devCampLogo,
          imgAlt: "Ícone dev.camp()",
          to: "",
          right: false,
        },
        {
          name: "dev.hire( )",
          description:
          "Assessoria de carreira onde os participantes <span class=\"text-ucl-orange\">assistem palestras preparatórias e conhecem empresas parceiras </span> com vagas de estágio e emprego.",
          imgUrl: devHireLogo,
          imgAlt: "Ícone dev.hire()",
          to: "",
          right: true,
          imgBackground: true,
        },
        {
          name: "dev.research( )",
          description:
          "Divisão de pesquisa onde os participantes da graduação são co-orientados por pós- graduandos em <span class=\"text-ucl-orange\"><b>ICs</b> ou <b>TCCs</b></span> nas áreas de atuação do grupo.",
          imgUrl: devResearchLogo,
          imgAlt: "Ícone dev.research()",
          to: "",
          right: false,
          imgBackground: true,
        },
      ],
    };
  },
  mounted() {
    console.log(
      "%cBem-vindo(a) ao site do %cUSPCodeLab %cButantã!",
      "font-size:14px; font-weight: bold;",
      "color: #ff690a; font-weight:bold; font-size: 14px",
      "font-size:14px; font-weight: bold;"
    );
  },
};
</script>
