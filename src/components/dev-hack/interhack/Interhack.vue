<template>
  <section id="interhack" class="md:pt-20 pb-20 text-center">
    <div class="mb-10 tracking-wide">
      <interhack-header />
    </div>
    <div class="container mx-auto flex flex-wrap flex-col items-center leading-loose">
      <custom-transition type="fade">
        <h1 class="mb-4">Última edição</h1>
      </custom-transition>

      <div class="flex justify-center items-center text-center md:text-left w-full md:w-7/10 md:-mt-6">
        <interhack-2019/>
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
/* HERO */

.image-as-background {
  background-image: url("../../../assets/dev-hack/Hackfools.jpeg");

  /* Set a specific height */
  min-height: 500px;
}

.hero {
  background-position: 50% 50%; /* This could be 50% 50%, 0 0, or really anything.  The world is your stinky little oyster! */
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  overflow: hidden;
  position: relative;
  width: 100%;

  /* Add a slight overlay on our image */
  &:after {
    background-color: rgba(255, 255, 255, 0.85);
    bottom: 0;
    content: "";
    left: -2000%;
    position: absolute;
    right: -2000%;
    top: 0;
    z-index: 1;
  }

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
}

.hero-container {
  box-sizing: border-box;
  height: auto;
  padding: 100px 50px;
  position: relative;
  text-align: center;
  z-index: 2;

  @media screen and (min-width: 640px) {
    height: 100%;
  }

  p {
    line-height: 1.7em;
  }
}

/* END HERO */

p > span {
  margin: -5.3px;
}

</style>
