<template>
  <div class="page">
    <the-navbar v-if="!isMobile()" :links="getNavLinks()" />
    <mobile-menu v-else :links="getNavLinks()" />
    <main>
      <hackathon-history :hackathons="hackathons" />
    </main>
    <the-footer :social-medias="getSocialMedias()" />
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

import TheNavbar from "@/components/TheNavbar.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import TheFooter from "@/components/TheFooter.vue";
import HackathonHistory from "@/components/hackathon/HackathonHistory.vue";


import devHackLogo from "@/assets/dev-journey/dev-hack.svg";
import devLearnLogo from "@/assets/dev-journey/dev-learn.svg";
import devBoostLogo from "@/assets/dev-journey/dev-boost.svg";
import devHireLogo from "@/assets/dev-journey/dev-hire.svg";
import devResearchLogo from "@/assets/dev-journey/dev-research.svg";
import devCampLogo from "@/assets/dev-journey/dev-camp.svg";

export default {
  components: {
    TheNavbar,
    MobileMenu,
    TheFooter,
    HackathonHistory
  },
  props: ["isMobile", "getNavLinks", "getSocialMedias"],
  setup() {
    useMeta({
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
    });
  },
  data() {
    return {
      hackathons: [
        {
          title: "HackathonUSP 2018.2",
          description: "A tecnologia a favor da sustentabilidade financeira das universidades",
          imgUrl: devLearnLogo,
          imgAlt: "Ícone dev.learn()",
          year: 2018.2,
          dates: [{ day: 10, month: 11, year: 2022 }, { day: 11, month: 11, year: 2022 }],
          locals: ["Instituto de Matemática e Estatística da USP"],
          to: ""
        },
        {
          title: "HackathonUSP 2018.1",
          description: "Aplicando ciência de dados para melhorar o dia a dia universitário",
          imgUrl: devLearnLogo,
          imgAlt: "Ícone dev.learn()",
          year: 2018.1,
          dates: [{ day: 9, month: 7, year: 2018 }, { day: 10, month: 7, year: 2018 }],
          locals: ["Instituto de Matemática e Estatística da USP"],
          to: ""
        },
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
  },
};
</script>


<style>
.hackathon {
  display: flex;
  flex: 1;
  margin-top: 100px;
  flex-direction: column;

}
</style>