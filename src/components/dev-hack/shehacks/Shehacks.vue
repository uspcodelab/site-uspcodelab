<template>
  <section id="shehacks" class="pb-20 text-center">
    <div class="mb-10 tracking-wide">
      <shehacks-header />
    </div>
    <div class="container mx-auto flex flex-wrap flex-col items-center leading-loose">

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
