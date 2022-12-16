<template>
  <div class="page">
    <the-navbar v-if="!isMobile()" :links="getNavLinks()" />
    <mobile-menu v-else :links="getNavLinks()" />
    <main>
      <hackathon-archive :hackathons="hackathons" />
    </main>
    <the-footer :social-medias="getSocialMedias()" />
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

import TheNavbar from "@/components/TheNavbar.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import TheFooter from "@/components/TheFooter.vue";
import HackathonArchive from "@/components/hackathon/HackathonArchive.vue";

import hackathon20182 from "@/assets/logos/hackathon-usp-2018.2.svg";
import hackathon20181 from "@/assets/logos/hackathon-usp-2018.1.svg";
import interhack from "@/assets/logos/interhack-logo.svg";
import deephack from "@/assets/logos/deephack-logo.png";
import sheehacks2022 from "@/assets/logos/shehacks-logo.png";


export default {
  components: {
    TheNavbar,
    MobileMenu,
    TheFooter,
    HackathonArchive
  },
  props: {
    isMobile: Boolean,
    getNavLinks: {
      type: Function,
      default: () => { }
    },
    getSocialMedias: {
      type: Function,
      default: () => { }
    },
  },
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
          title: "SheHacks 2022",
          description: 'Junte-se a um time multidisciplinar de mulheres universitárias cis e ' +
            'trans para propor formas de melhorar a acessibilidade tecnológica na sociedade.',
          imgUrl: sheehacks2022,
          imgAlt: "Shehacks logo",
          year: 2022,
          dates: ["2019-10-22"],
          locals: [
            "Sede da Meta - São Paulo SP",
          ],
          to: "https://shehacks.xyz/"
        },
        {
          title: "InterHack",
          description: 'O InterHack é um campeonato de hackathons com três seletivas e uma grande final. ' +
            'As eliminatórias ocorrerão simultaneamente nos campi Butantã (IME-USP), São Carlos (ICMC-USP) ' +
            'e Leste (EACH-USP) da Universidade de São Paulo.',
          imgUrl: interhack,
          imgAlt: "Interhack logo",
          year: 2019,
          dates: ["2019-11-09", "2019-11-10"],
          locals: [
            "Instituto de Matemática e Estatística da USP",
            "Instituto de Ciências Matemáticas e de Computação",
            "Escola de Artes, Ciências e Humanidades"
          ],
          to: "https://interhack.xyz/2019"
        },
        {
          title: "DeepHack 2019",
          description: "Ajude o TCE-SP a identificar os objetivos de desenvolvimento sustentavel para 2030 no estado de SP.",
          imgUrl: deephack,
          imgAlt: "DeepHack 2019 logo",
          year: 2019,
          dates: ["2019-10-05"],
          locals: ["R. Capote Valente, 39 - Pinheiros, São Paulo.", "Remoto"],
          to: "https://deephack.xyz/2019"
        },
        {
          title: "HackathonUSP 2018.2",
          description: "A tecnologia a favor da sustentabilidade financeira das universidades.",
          imgUrl: hackathon20182,
          imgAlt: "Hackathon 2018.2 logo",
          year: 2018,
          dates: ["2018-11-10", "2018-11-11"],
          locals: ["Instituto de Matemática e Estatística da USP"],
          to: "https://hackathon.ime.usp.br/2018.2"
        },
        {
          title: "HackathonUSP 2018.1",
          description: "Aplicando ciência de dados para melhorar o dia a dia universitário.",
          imgUrl: hackathon20181,
          imgAlt: "Hackathon 2018.1 logo",
          year: 2018,
          dates: ["2018-06-09", "2018-06-10"],
          locals: ["Instituto de Matemática e Estatística da USP"],
          to: "https://hackathon.ime.usp.br/2018.1"
        },
      ].map(hackathon => ({ ...hackathon, dates: hackathon.dates.map(date => new Date(date)).sort() }))
        .sort((hackathonA, hackathonB) => hackathonB.year - hackathonA.year)
    };
  },
  mounted() {
    console.log(
      "%cBem vindo(a) ao site do USP%cCode%cLab!",
      "font-size:14px; font-weight: bold;",
      "color: #ff690a; font-weight:bold; font-size: 14px",
      "font-size:14px; font-weight: bold;"
    );
    window.scrollTo(0, 0);
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