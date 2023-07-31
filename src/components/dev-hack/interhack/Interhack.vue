<template>
  <section id="interhack" class="md:pt-20 pb-20 text-center">
    <div class="mb-10 tracking-wide">
      <interhack-header />
    </div>
    <div
      class="container mx-auto flex flex-wrap flex-col items-center leading-loose"
    >
      <custom-transition type="fade">
        <h1 class="mb-4">Última edição</h1>
      </custom-transition>

      <div
        class="flex justify-center items-center text-center md:text-left w-full md:w-7/10 md:-mt-6"
      >
        <interhack-2019 />
      </div>
    </div>
  </section>
</template>

<script>
import Interhack2019 from "./Interhack2019";
import InterhackHeader from "./InterhackHeader";

export default {
  components: {
    Interhack2019,
    InterhackHeader,
  },
};
</script>

<style scoped lang="scss">
p > span {
  margin: -5.3px;
}
</style>
