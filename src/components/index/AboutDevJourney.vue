<template>
  <section
    id="dev-journey"
    class="relative bg-ucl-white text-ucl-black md:px-12 lg:px-20 xl:px-0 pt-20 overflow-hidden flex pb-10 md:pb-0"
  >
    <div id="bubbles-container-menu" class="relative flex w-full">
      <div class="container mx-auto">
        <h1
          class="text-ucl-orange text-5xl font-thin text-center pb-4 tracking-wide"
        >
          dev.journey( )
        </h1>
        <p class="leading-loose text-center mt-10 mb-6 md:mb-0 mx-2">
          <b>Bem-vindo à nossa jornada!</b> O dev.journey é um programa
          educacional com <b>6 iniciativas</b> que visa complementar a formação
          dos estudantes para que eles se tornem<span class="text-ucl-orange">
            engenheiros de software</span
          >
          capazes de desenvolverem sistemas reais. Abaixo, você pode se
          aventurar por todas elas!
        </p>
        <section-list :array="devJourneyStages" />
      </div>
    </div>
  </section>
</template>

<script>
import SectionList from "@/components/dev-journey/SectionList.vue";

export default {
  components: {
    SectionList,
  },
  props: {
    devJourneyStages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    let numBubbles = 20;
    let minSize = 20;
    let maxSize = 60;
    let container = this.$el.querySelector("#bubbles-container-menu");

    startBubbles();

    function startBubbles() {
      let contBubbles;
      contBubbles = numBubbles;
      while (contBubbles--) {
        createBubble();
      }
    }

    function createBubble() {
      let size = getBubbleSize();
      let location = getBubbleLocation();
      let delay = getAnimationDelay();
      let bubble = document.createElement("span");

      bubble.setAttribute("class", "bubble-menu");
      bubble.setAttribute(
        "style",
        "width: " +
          size +
          "px; height: " +
          size +
          "px; left: " +
          location +
          "%; animation-delay: -" +
          delay +
          "s; z-index: 1;"
      );
      container.appendChild(bubble);
    }

    function getBubbleSize() {
      return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    }

    function getAnimationDelay() {
      // animation-delay=-20s and animation-delay=0s
      return Math.random() * 20;
    }

    function getBubbleLocation() {
      // Between left=2% and left=98%
      return Math.floor(Math.random() * 96) + 2;
    }
  },
};
</script>

<style lang="scss">
#dev-journey {
  background-image: linear-gradient(#f8f9fa, #ffddc6);
}

// BUBBLES

#bubbles-container-menu > * {
  z-index: 2;
}

.bubble-menu {
  display: block;
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 105, 10, 0.1);
  animation: rise 12s linear infinite;
}

@keyframes rise {
  from {
    bottom: -5%;
  }
  to {
    bottom: 120%;
  }
}
</style>
