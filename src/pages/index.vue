<template>
  <div class="page">
    <the-navbar v-if="!isMobile()" :links="links"/>
    <mobile-menu v-else :links="links"/>
    <the-header/>
    <main>
      <about-dev-journey :dev-journey-stages="devJourneyStages"/>
      <about-dev-camp/>
      <about-hackathon-usp/>
    </main>
    <the-footer :social-medias="socialMedias" />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

import AboutHackathonUsp from "@/components/AboutHackathonUsp.vue";
import AboutDevJourney from "@/components/AboutDevJourney.vue";
import AboutDevCamp from "@/components/AboutDevCamp.vue";

import devStartLogo from "@/assets/dev-journey/dev-start.svg";
import devLearnLogo from "@/assets/dev-journey/dev-learn.svg";
import devBoostLogo from "@/assets/dev-journey/dev-boost.svg";
import devHireLogo from "@/assets/dev-journey/dev-hire.svg";
import devResearchLogo from "@/assets/dev-journey/dev-research.svg";
import devCampLogo from "@/assets/dev-journey/dev-camp.svg";

export default {
  components: {
    TheNavbar,
    MobileMenu,
    TheHeader,
    TheFooter,

    AboutHackathonUsp,
    AboutDevJourney,
    AboutDevCamp
  },
  data() {
    return {
      links: [
        { url: "/", name: "Início" },
        { url: "devcamp()", name: "dev.camp()" },
        { url: "hackathonusp", name: "HackathonUSP" }
      ],
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
      ],
      socialMedias: [
        {
          url: "http://uclab.xyz/facebook",
          iconPrefix: "fab",
          iconName: "facebook"
        },
        {
          url: "http://uclab.xyz/github",
          iconPrefix: "fab",
          iconName: "github"
        },
        {
          url: "http://uclab.xyz/gitlab",
          iconPrefix: "fab",
          iconName: "gitlab"
        },
        {
          url: "http://uclab.xyz/telegram",
          iconPrefix: "fab",
          iconName: "telegram"
        },
        {
          url: "http://uclab.xyz/medium",
          iconPrefix: "fab",
          iconName: "medium"
        },
        {
          url: "mailto:codelab@ime.usp.br",
          iconPrefix: "fas",
          iconName: "envelope"
        }
      ]
    };
  },
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
