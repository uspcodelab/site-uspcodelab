<template>
  <div class="flex flex-wrap container md:pt-12 mb-12 md:mb-0 mx-auto px-4 md:px-4 leading-loose">
    <div>
      <custom-transition type="fade">
        <h1 class="pb-4 text-center">
          Essa é a nossa
          <span class="bg-ucl-orange text-white"> Essência. </span>
        </h1>
      </custom-transition>
      <custom-transition type="fade" class="lg:text-xs text-left text-grey-darker">
        <p class="mb-2">
          Em geral, Hackathons são eventos de tecnologia que reúnem pessoas
          apaixonadas por programação, design e inovação. <b>É um momento de
            imersão</b>, onde os participantes têm a oportunidade de criar, inovar e
          aprender através de muita cooperação e trabalho em grupo. Juntos de muita energia, comida, diversão e
          networking, os
          participantes se dedicam
          por horas a fio para desenvolver projetos incríveis, apresentando-os
          ao final do evento em pitches e concorrendo a prêmios.
        </p>
        <p>
          <span class="text-ucl-orange">Com anos e mais anos de experiência, esses eventos estão
            sangue do USPCodelab</span>, afinal foi com a organização de hackathons que
          o grupo nasceu e se consolidou. <b>É a nossa essência</b>. A seguir, estão
          alguns dos hackathons que organizamos nos últimos anos, em que se destacam
          <span v-scroll-to="'#' + hackathons.Interhack.title" class="text-inter-red cursor-pointer">
            Interhack</span>,
          <span v-scroll-to="'#' + hackathons.Shehacks.title" class="text-sh-blue cursor-pointer">
            Shehacks
          </span>
          e
          <span v-scroll-to="'#' + hackathons.Hackfools.title" class="text-ucl-orange cursor-pointer">
            Hackfools</span>.
        </p>
      </custom-transition>
    </div>
    <div class="hidden md:flex flex-wrap flex-col md:flex-row justify-between items-center md:mt-5">
      <div class="w-1/2 md:w-1/4">
        <div v-scroll-to="'#' + hackathons.Interhack.title" :alt="hackathons.Hackfools.alt" class="cursor-pointer">
          <interhack class="logo-hack" />
        </div>
      </div>

      <div class="w-1/2 md:w-1/4">
        <div v-scroll-to="'#' + hackathons.Shehacks.title" :alt="hackathons.Shehacks.alt" class="cursor-pointer">
          <shehacks class="logo-hack" />
        </div>
      </div>

      <div class="w-1/2 md:w-1/4 mb-10 md:mb-0">
        <div v-scroll-to="'#' + hackathons.Hackfools.title" :alt="hackathons.Interhack.alt" class="cursor-pointer">
          <hackfools class="logo-hack" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HackfoolsHeader from "./hackfools/HackfoolsHeader.vue";

import Hackfools from "./hackfools/HackfoolsLogo";
import Shehacks from "./shehacks/ShehacksLogo";
import Interhack from "./interhack/InterhackLogo";

export default {
  components: {
    HackfoolsHeader,
    Hackfools,
    Shehacks,
    Interhack,
  },
  data() {
    return {
      hackathons: {
        Hackfools: {
          src: Hackfools,
          title: "hackfools",
          alt: "Logo Hackfools",
        },
        Shehacks: {
          src: Shehacks,
          title: "shehacks",
          alt: "Logo Shehacks",
        },
        Interhack: {
          src: Interhack,
          title: "interhack",
          alt: "Logo Interhack",
        },
      },
    };
  },
};
</script>

<style scoped>
.logo-hack {
  transition: ease-out 0.1s;
}

.logo-hack:hover {
  transform: scale(1.02);
}
</style>
