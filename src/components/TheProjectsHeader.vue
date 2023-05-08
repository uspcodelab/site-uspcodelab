<template>
  <header class="md:pt-16 z-20 header text-ucl-white h-screen flex flex-wrap">
    <div id="bubbleCounter"></div>
    <div id="bubbles-container" class="relative overflow-hidden flex w-full">
      <div class="w-full relative flex items-center justify-center pb-32">
        <h1 id="title" class="text-header font-bold text-center tracking-wide z-10">
          {{ data.title }}
        </h1>
      </div>
    </div>
    <section id="waves">
      <div class="wave wave-one" />   
      <div class="wave wave-two" />
      <div class="wave wave-three" />
      <div class="wave wave-four" /> Estoure as bolhas 
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
    let poppedBubbles = 0;
    let minSize = 10;
    let maxSize = 35;
    let container = this.$el.querySelector("#bubbles-container");
    let bubbleCounter = this.$el.querySelector("#bubbleCounter");
    let title = this.$el.querySelector("#title");

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
    
    function popBubble(event) {
      let bubble = event.target;
      bubble.classList.add("pop");
      setTimeout(()=>{
        bubble.remove();
      }, 50)
      poppedBubbles++;
      if(poppedBubbles >= 2){
        bubbleCounter.innerHTML = poppedBubbles + "/" + numBubbles;
      }
      if(poppedBubbles == numBubbles) {
        win();
      }
    }
    
    function win(){
      bubbleCounter.innerHTML = "";
      
      title.style.animation = "anticipate 0.4s forwards ease-out, goAway 1.7s 0.4s forwards ease";
      
      setTimeout(() => {title.innerHTML = poppedBubbles + "/" + numBubbles + "!"
      title.style.animation = "goIn ease-out 1.7s"
      }, 2000);

      container.style.transition = "0.8s"
      setTimeout(()=>{
        startBubblesWin();
        setTimeout(() => container.style.background = "#08407b", 2000);        
      }, 2000);
    }

    function startBubblesWin() {
      numBubbles = 120;
      let countBubbles = 0;
      
      function startBubble() {
        countBubbles++;
        createBubbleWin();
        if(countBubbles == numBubbles) {
          clearInterval(i);
        }
      }
      let i = setInterval(startBubble, 50);
    }

    function createBubbleWin() {
      let size = getBubbleSize();
      let location = getBubbleLocation();
      let bubble = document.createElement("span");
      let color = getColor();
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
          "!important;"

      );
      container.appendChild(bubble);
    }

    function getColor(){
      let colors = ["#8b3ff8", "#ff6900", "#ff4dbc", "#87fdc7"]
      let index = Math.floor(Math.random() * (colors.length));

      console.log(colors[index]);
      return colors[index];
    }

  },
};
</script>

<style lang="scss">
//DEFAULT
#title {
  position: absolute;
}

@keyframes anticipate{
  to {
    transform: translate(-20%) ; 
  }
}
@keyframes goAway{
  to {
    transform: translateX(100vw); 
  }
}

@keyframes goIn {
  from {
    transform: translateX(-100vw)
  }
  to {
    transform: translate(0,0);
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
  animation: rise 6s ease-in infinite;
}

#bubble::before { //Aumentar a área clickável de cada bolha.
  content: "";
  width: 300%;
  height: 300%;
  position: absolute;
  transform: translate(-33.444%,-33.444%);
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
  transform: scale(1.8,1.8) !important;

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
}

#waves .wave.wave-one {
  animation: wave-one 30s linear infinite;
  z-index: 4;
  bottom: 0;
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
