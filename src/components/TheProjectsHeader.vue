<template>
  <header class="md:pt-16 z-20 header text-ucl-white h-screen flex flex-wrap">
    <div id="bubbles-container" class="relative overflow-hidden flex w-full">
      <div class="w-full relative flex items-center justify-center pb-32">
        <h1 class="text-header font-bold text-center tracking-wide z-10">
          {{ data.title }}
        </h1>
      </div>
    </div>
    <section id="waves">
      <div class="wave wave-one" />
      <div class="wave wave-two" />
      <div class="wave wave-three" />
      <div class="wave wave-four" />
    </section>
  </header>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return {
          title: "",
        };
      },
    },
  },
  mounted() {
    let numBubbles = 20;
    let minSize = 10;
    let maxSize = 20;
    let container = this.$el.querySelector("#bubbles-container");

    startBubbles();

    function startBubbles() {
      while (numBubbles--) {
        createBubble();
      }
    }

    function createBubble() {
      let size = getBubbleSize();
      let location = getBubbleLocation();
      let delay = getAnimationDelay();
      let bubble = document.createElement("span");

      bubble.setAttribute("id", "bubble");
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
          "s;"
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
// BUBBLES

$background: #ff6900;
$bubbles: lighten($background, 20%);

#bubble {
  display: block;
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: $bubbles;
  animation: rise 6s ease-in infinite;
}

@keyframes rise {
  from {
    bottom: -5%;
  }
  to {
    bottom: 120%;
  }
}

// WAVES

#waves {
  background-color: black;
  position: absolute;
  top: 100%;
  width: 100vw;
}

#waves .wave {
  background-image: url("../assets/wave.webp");
  background-size: 1000px 100px;
  bottom: 0;
  height: 100px;
  left: 0;
  position: absolute;
  width: 100%;
}

#waves .wave.wave-one {
  animation: wave-one 30s linear infinite;
  z-index: 4;
  filter: brightness(0) invert(100%) sepia(4%) saturate(1431%)
    hue-rotate(172deg) brightness(100%) contrast(97%);
}

#waves .wave.wave-two {
  animation: wave-two 15s -5s linear infinite;
  bottom: 10px;
  opacity: 0.5;
  z-index: 3;
}

#waves .wave.wave-three {
  animation: wave-one 30s -2s linear infinite;
  bottom: 15px;
  opacity: 0.2;
  z-index: 2;
}

#waves .wave.wave-four {
  animation: wave-two 5s -5s linear infinite;
  bottom: 20px;
  opacity: 0.7;
  z-index: 1;
}

@keyframes wave-one {
  from {
    background-position-x: 0;
  }

  to {
    background-position-x: 1000px;
  }
}

@keyframes wave-two {
  from {
    background-position-x: 0;
  }

  to {
    background-position-x: -1000px;
  }
}
</style>
