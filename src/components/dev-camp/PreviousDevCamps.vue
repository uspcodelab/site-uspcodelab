<template>
  <section class="section section--light">
    <h1 class="title">
      Últimas Edições
    </h1>
    <p class="description description--short">
      Veja o que aconteceu nas edições anteriores do dev.camp()!
    </p>
    <card-list :array="devCampList" />
  </section>
</template>

<script scoped>
import CardList from "@/components/util/CardList.vue";

import devCampList from "@/json/devCampList.json";


export default {
  components: {
    CardList,
  },
  data() {
    return {
      devCampList
    };
  }
};
</script>
