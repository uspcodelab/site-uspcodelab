<template>
  <section
    id="previous-dev-camps"
    class="bg-ucl-white text-ucl-black px-8 md:px-12 lg:px-20 xl:px-0 py-20"
  >
    <div class="container mx-auto">
      <h1
        class="text-ucl-orange text-4xl font-thin text-center pb-4 tracking-wide"
      >
        Últimas Edições
      </h1>
      <p
        class="lg:text-sm text-grey-darker text-center leading-normal mb-4 pb-4"
      >
        Veja o que aconteceu nas últimas edições do dev.camp()! Clique nas fotos
        para ser levado à respectiva galeria.
      </p>
      <card-list :array="data" :full="true" />
    </div>
  </section>
</template>

<script>
import CardList from "@/components/CardList.vue";

export default {
  components: {
    CardList,
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>
