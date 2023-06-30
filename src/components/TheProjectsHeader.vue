<template>
  <header
    :style="{ background: themeObj.bgColor }"
    class="md:pt-16 z-20 text-ucl-white h-screen flex flex-wrap"
  >
    <div id="bubbleCounter" />
    <div id="bubbles-container" class="relative overflow-hidden flex w-full">
      <div class="w-full relative flex items-center justify-center pb-32">
        <h1
          id="title"
          :style="{ color: themeObj.titleColor }"
          class="text-header font-bold text-center tracking-wide z-10"
        >
          {{ title }}
        </h1>
      </div>
    </div>
    <span id="arrow" class="absolute md:hidden">
      <div
        v-scroll-to="'#body'"
        class="flex items-center flex-no-shrink mr-4 cursor-pointer"
      >
        <font-awesome-icon
          id="arrow-icon"
          :icon="{ prefix: 'fas', iconName: 'arrow-down' }"
          aria-labelledby="arrowDown"
          title="Flecha para indicar mais conteúdo"
        />
      </div>
    </span>
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
    title: {
      type: String,
      default: "default",
      required: true,
    },
    theme: {
      type: String,
      default: "default",
    },
  },
  data() {
    return {
      themes: {
        default: {
          titleColor: "white",
          bgColor: "linear-gradient(#ff8b46, #ff6900)",
          bubblesColors: ["#FFB78B"],
          bubbles: true,
          bubbleGame: true,
        },
        webdev: {
          titleColor: "white",
          bgColor: "black",
          bubblesColors: ["#8b3ff8", "#ff6900", "#ff4dbc", "#87fdc7"],
          bubbles: true,
          bubbleGame: true,
        },
      },
    };
  },
  computed: {
    themeObj() {
      return this.themes[this.theme] || this.themes["default"];
    },
  },
  mounted() {
    let numBubbles = 20;
    let poppedBubbles = 0;
    let minSize = 10;
    let maxSize = 35;
    let container = this.$el.querySelector("#bubbles-container");
    let bubbleCounter = this.$el.querySelector("#bubbleCounter");
    let title = this.$el.querySelector("#title");
    let themeObj = this.themeObj;

    if (!themeObj.bubbles) return;

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
      let color = getColor();
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
          "s; background: " +
          color +
          " !important;"
      );
      bubble.addEventListener("click", popBubble);
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

    function getColor() {
      let colors = themeObj.bubblesColors;
      if (colors.length == 1) {
        return colors[0];
      }
      let index = Math.floor(Math.random() * colors.length);
      return colors[index];
    }

    function popBubble(event) {
      let bubble = event.target;
      bubble.classList.add("pop");
      setTimeout(() => {
        bubble.remove();
      }, 50);

      if (!themeObj.bubbleGame) return;

      poppedBubbles++;
      if (poppedBubbles >= 2) {
        bubbleCounter.innerHTML = poppedBubbles + "/" + numBubbles;
      }
      if (poppedBubbles == numBubbles) {
        win();
      }
    }

    function win() {
      bubbleCounter.innerHTML = "";

      title.style.animation =
        "anticipate 0.4s forwards ease-out, goAway 0.4s 0.4s forwards ease";

      container.style.transition = "2s";
      setTimeout(() => {
        container.style.background = "#08407b";
        startBubblesWin();
      }, 800);
      setTimeout(() => {
        title.innerHTML = poppedBubbles + "/" + poppedBubbles + "!";
        title.style.animation = "goIn ease-out 1s";
      }, 800);
    }

    function startBubblesWin() {
      numBubbles = 120;
      let countBubbles = 0;

      function startBubble() {
        countBubbles++;
        createBubbleWin();
        if (countBubbles == numBubbles) {
          clearInterval(i);
        }
      }
      let i = setInterval(startBubble, 50);
    }

    function createBubbleWin() {
      let size = getBubbleSize();
      let location = getBubbleLocation();
      let bubble = document.createElement("span");
      let color = getColorWin();
      let time = getTime();
      bubble.setAttribute("id", "winBubble");
      bubble.setAttribute(
        "style",
        "width: " +
          size +
          "px; height: " +
          size +
          "px; left: " +
          location +
          "%; background: " +
          color +
          ";" +
          "animation-duration: " +
          time +
          "s ;"
      );
      container.appendChild(bubble);
    }

    function getColorWin() {
      let colors = ["#8b3ff8", "#ff6900", "#ff4dbc", "#87fdc7"];
      let index = Math.floor(Math.random() * colors.length);
      return colors[index];
    }

    function getTime() {
      return Math.floor(Math.random() * 4) + 1;
    }
  },
};
</script>

<style lang="scss">

body,
html {
  overflow-x: hidden;
}

// WIN GAME

#title {
  position: absolute;
}

@keyframes anticipate {
  to {
    transform: translate(-20%);
  }
}
@keyframes goAway {
  to {
    transform: translateX(100vw);
  }
}

@keyframes goIn {
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translate(0, 0);
  }
}

// ARROW

#arrow {
  left: 50%;
  top: 70%;
  transform: translateX(-50%);
  -webkit-animation: arrow-animation 4s infinite ease-in-out;
  -moz-animation: arrow-animation 4s infinite ease-in-out;
  animation-direction: alternate;
}

#arrow-icon {
  transform: scale(3);
}

@-webkit-keyframes arrow-animation {
  0%,
  100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(50%);
  }
}

// BUBBLES

$background: #ff6900;
$bubbles: lighten($background, 20%);

#bubble {
  display: block;
  position: absolute;
  border-radius: 50%;
  background: $bubbles;
  animation: rise 6s ease-in infinite;
}

#winBubble {
  display: block;
  position: absolute;
  border-radius: 50%;
  background: $bubbles;
  animation: rise ease-in infinite;
}

#bubble::before {
  // Increase clickable area
  content: "";
  width: 300%;
  height: 300%;
  position: absolute;
  transform: translate(-33.444%, -33.444%);
}

#bubble:hover {
  cursor: pointer;
}

@keyframes rise {
  from {
    bottom: -5%;
  }
  to {
    bottom: 120%;
  }
}

.pop {
  transform: scale(1.8, 1.8) !important;
  transition: 120ms;
}

#bubbleCounter {
  position: absolute;
  margin: 10px 0 0 10px;
}

// WAVES

#waves {
  position: absolute;
  top: 100%;
  width: 100vw;
}

#waves .wave {
  background-image: url("../assets/wave.webp");
  background-size: 1000px 100px;
  height: 100px;
  left: 0;
  position: absolute;
  width: 100%;
  filter: brightness(0) invert(100%) sepia(4%) saturate(1431%)
    hue-rotate(172deg) brightness(100%) contrast(97%);
}

#waves .wave.wave-one {
  animation: wave-one 30s linear infinite;
  z-index: 4;
  bottom: 0;
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
