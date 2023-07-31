<template>
  <section id="shehacks" class="pb-20 text-center">
    <div class="mb-10 tracking-wide">
      <shehacks-header />
    </div>
    <div
      class="container mx-auto flex flex-wrap flex-col items-center leading-loose"
    >
      <custom-transition type="fade">
        <h1 class="mb-4">Edições Anteriores</h1>
      </custom-transition>

      <div class="text-center md:text-left w-full md:w-7/10 mt-4 md:mt-0">
        <shehacks-2021 />
        <shehacks-2022 />
      </div>
    </div>
  </section>
</template>

<script>
import Shehacks2022 from "./Shehacks2022";
import Shehacks2021 from "./Shehacks2021";

import ShehacksHeader from "./ShehacksHeader";

export default {
  components: {
    Shehacks2022,
    Shehacks2021,
    ShehacksHeader,
  },
};
</script>

<style scoped lang="scss">
p > span {
  margin: -5.3px;
}
</style>
