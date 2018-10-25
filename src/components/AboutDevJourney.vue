<template>
  <section id="dev-journey" class="dev-journey px-4 py-20">
    <h1 class="title font-bold text-center pb-3">
      dev.journey()
    </h1>
    <p class="lg:text-sm text-grey-darker text-center pb-4">
      Programa de 6 fases que visa introduzir e amadurecer
      os conhecimentos dos alunos da USP sobre desenvolvimento
      de software
    </p>
    <card-list :array="devJourneyStages" />
  </section>
</template>

<script>
import Card from "@/components/Card.vue";
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


<style lang="scss">
.dev-journey {
  background-color: $ucl-light;
  color: $ucl-black;
}
</style>
