<template>
  <section id="dev-journey" class="bg-ucl-white text-ucl-black px-8 md:px-12 lg:px-20 xl:px-0 py-20">
    <div class="container mx-auto">
      <h1 class="text-ucl-orange text-4xl font-thin text-center pb-4 tracking-wide">
        dev.journey()
      </h1>
      <p class="lg:text-sm text-grey-darker text-center leading-normal mb-4 pb-4">
        Programa de 6 fases que visa introduzir e amadurecer
        os conhecimentos dos alunos da USP sobre desenvolvimento
        de software
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
