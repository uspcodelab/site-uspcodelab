<template>
  <section id="dev-journey" class="relative bg-ucl-white text-ucl-black px-8 md:px-12 lg:px-20 xl:px-0 py-20">
    <div class="container mx-auto">
      <h1 class="text-ucl-orange text-5xl font-thin text-center pb-4 tracking-wide">
        dev.journey()
      </h1>
      <p class="lg:text-xl text-center font-hairline mt-10">Bem vindo à nossa jornada!<br>O dev.journey é um programa educacional com 6 iniciativas que visa<br>complementar a formação dos estudantes para que eles se tornem<br>engenheiros de software capazes de desenvolverem sistemas reais.<br>Abaixo, você pode se aventurar por todas elas!</p>

      <!-- <card-list :array="devJourneyStages" /> -->

      
      <section-list :array="devJourneyStages"/>
    </div>
  </section>
</template>

<script>

import CardList from "@/components/CardList.vue";
import SectionList from "@/components/SectionList.vue";

export default {
  components: {
    CardList,
    SectionList
  },
  props: {
    devJourneyStages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};

</script>

<style lang="scss">
  #dev-journey {
    background-image: linear-gradient(white, #FFC39E);
  }
</style>