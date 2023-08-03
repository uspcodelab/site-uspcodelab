<template>
  <div
    class="flex flex-wrap container md:pt-12 mb-12 md:mb-0 mx-auto px-4 md:px-4 leading-loose"
  >
    <div>
      <custom-transition type="fade">
        <h1 class="pb-4 text-center">
          Essa é a nossa
          <span class="bg-ucl-orange text-white"> Essência. </span>
        </h1>
      </custom-transition>
      <custom-transition
        type="fade"
        class="lg:text-xs text-left text-grey-darker"
      >
        <p class="mb-2">
          Apaixonados por hackathons, foi com a ideia de criar um grupo para a
          organização deles que os fundadores trouxeram o Codelab ao mundo,
          <b>sendo uma peça importantíssima para o nosso surgimento.</b> Desde o
          início, buscamos cultivar a
          <b> paixão por hackathons entre os membros</b>, que têm se dedicado
          extensivamente para a organização de alguns dos maiores eventos de
          tecnologia do Brasil.
          <span class="text-ucl-orange"
            >Com anos e mais anos de experiência, esses eventos estão
            sangue</span
          >.
        </p>
        <p class="mb-2">
          O primeiro de todos — e que desencadeou uma sucessão incrível de
          tantos outros — foi o HackathonIME, que ocorreu em 2015 para um
          público restrito de 28 pessoas do Instituto de Matemática e
          Estatística da USP. Ainda estávamos começando. Evoluindo ano a ano,
          chegamos até 2019 com o Interhack, um evento incrível que suportou
          <b>
            112 participantes no que viria ser um dos maiores hackathons já
            feitos no Brasil.</b
          >
        </p>
        <p class="mb-2">
          Com a pandemia, a organização dos hackathons que amamos ficou
          impossibilitada e, então, agora pretendemos voltar com tudo. Por isso,
          em 2023, teremos 3 maravilhosos hackathons:
          <span
            v-scroll-to="'#' + hackathons.Interhack.title"
            class="text-inter-red cursor-pointer"
          >
            Interhack</span
          >,
          <span
            v-scroll-to="'#' + hackathons.Shehacks.title"
            class="text-sh-blue cursor-pointer"
          >
            Shehacks
          </span>
          e
          <span
            v-scroll-to="'#' + hackathons.Hackfools.title"
            class="text-ucl-orange cursor-pointer"
          >
            Hackfools</span
          >.
        </p>
      </custom-transition>
    </div>
    <div
      class="hidden md:flex flex-wrap flex-col md:flex-row justify-between items-center md:mt-5"
    >
      <div class="w-1/2 md:w-1/4">
        <div
          v-scroll-to="'#' + hackathons.Interhack.title"
          :alt="hackathons.Hackfools.alt"
          class="cursor-pointer"
        >
          <interhack class="logo-hack" />
        </div>
      </div>

      <div class="w-1/2 md:w-1/4">
        <div
          v-scroll-to="'#' + hackathons.Shehacks.title"
          :alt="hackathons.Shehacks.alt"
          class="cursor-pointer"
        >
          <shehacks class="logo-hack" />
        </div>
      </div>

      <div class="w-1/2 md:w-1/4 mb-10 md:mb-0">
        <div
          v-scroll-to="'#' + hackathons.Hackfools.title"
          :alt="hackathons.Interhack.alt"
          class="cursor-pointer"
        >
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
