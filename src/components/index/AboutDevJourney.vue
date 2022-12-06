<template>
  <section id="dev-journey" class="bg-ucl-white text-ucl-black px-8 md:px-12 lg:px-20 xl:px-0 py-20">
    <div class="container mx-auto">
      <h1 class="text-ucl-orange text-4xl font-thin text-center pb-4 tracking-wide">
        dev.journey()
      </h1>
      <p class="lg:text-sm text-gray-600 text-center leading-normal mb-4 pb-4">
        <b>Programa educacional</b> com 6 iniciativas que visa complementar a formação dos estudantes para que eles se
        tornem <b>engenheiros de software</b> capazes de desenvolverem sistemas reais
      </p>
      <card-list :array="devJourneyStages" />
    </div>
  </section>
</template>

<script>
import CardList from "@/components/CardList.vue";

export default {
  components: {
    CardList
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
