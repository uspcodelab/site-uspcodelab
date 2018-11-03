<template>
  <section id="dev-journey" class="bg-ucl-light text-ucl-black px-4 py-20">
    <h1 class="title text-4xl font-bold text-center pb-4 tracking-wide">
      dev.journey()
    </h1>
    <p class="lg:text-sm text-grey-darker text-center leading-normal mb-4 pb-4">
      Programa de 6 fases que visa introduzir e amadurecer
      os conhecimentos dos alunos da USP sobre desenvolvimento
      de software
    </p>
    <card-list :array="devJourneyStages" />
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
