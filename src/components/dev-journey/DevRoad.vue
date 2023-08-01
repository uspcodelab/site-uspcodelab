<template>
  <custom-transition v-if="direction" type="fade" class="absolute">
    <div class="right-to-left" />
    <div class="right-to-left" />
    <div class="right-to-left" />
  </custom-transition>

  <custom-transition v-else type="fade" class="absolute">
    <div class="left-to-right" />
    <div class="left-to-right" />
    <div class="left-to-right" />
  </custom-transition>
</template>

<script>
export default {
  props: {
    direction: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>

<style lang="scss">
@media (min-width: 768px) {
  .right-to-left:nth-child(1) {
    position: absolute;
    top: -7vw;
    left: 26vw;

    background-color: $ucl-orange;
    border-radius: 2rem 2rem 2rem 2rem;
    width: 5rem;
    height: 2rem;
    transform: rotate(38deg);
  }

  .right-to-left:nth-child(2) {
    position: absolute;
    top: 0vw;
    left: 36vw;

    background-color: $ucl-orange;
    border-radius: 2rem 2rem 2rem 2rem;
    width: 5rem;
    height: 2rem;
    transform: rotate(32deg);
  }

  .right-to-left:nth-child(3) {
    position: absolute;
    top: 7vw;
    left: 46vw;

    background-color: $ucl-orange;
    border-radius: 2rem 2rem 2rem 2rem;
    width: 5rem;
    height: 2rem;
    transform: rotate(31deg);
  }

  .left-to-right:nth-child(1) {
    position: absolute;
    top: -13vw;
    left: 41vw;

    background-color: $ucl-orange;
    border-radius: 2rem 2rem 2rem 2rem;
    width: 5rem;
    height: 2rem;
    transform: rotate(135deg);
  }

  .left-to-right:nth-child(2) {
    position: absolute;
    top: -5vw;
    left: 33vw;

    background-color: $ucl-orange;
    border-radius: 2rem 2rem 2rem 2rem;
    width: 5rem;
    height: 2rem;
    transform: rotate(132deg);
  }

  .left-to-right:nth-child(3) {
    position: absolute;
    top: 3vw;
    left: 26vw;

    background-color: $ucl-orange;
    border-radius: 2rem 2rem 2rem 2rem;
    width: 5rem;
    height: 2rem;
    transform: rotate(126deg);
  }
}

@media (min-width: 1200px) {
  .right-to-left:nth-child(1) {
    top: -5vw;
    left: 31vw;
    transform: rotate(52deg);
  }

  .right-to-left:nth-child(2) {
    top: 2vw;
    left: 37vw;
    transform: rotate(48deg);
  }

  .right-to-left:nth-child(3) {
    top: 9vw;
    left: 43vw;
    transform: rotate(46deg);
  }

  .left-to-right:nth-child(1) {
    top: -13vw;
    left: 39vw;
    transform: rotate(140deg);
  }

  .left-to-right:nth-child(2) {
    top: -7vw;
    left: 33vw;
    transform: rotate(131deg);
  }

  .left-to-right:nth-child(3) {
    top: 0vw;
    left: 28vw;
    transform: rotate(123deg);
  }
}

@media (min-width: 1420px) {
  .right-to-left:nth-child(1) {
    top: -5vw;
    left: 24vw;
    transform: rotate(52deg);
  }

  .right-to-left:nth-child(2) {
    top: 1vw;
    left: 29vw;
    transform: rotate(48deg);
  }

  .right-to-left:nth-child(3) {
    top: 7vw;
    left: 35vw;
    transform: rotate(46deg);
  }

  .left-to-right:nth-child(1) {
    top: -13vw;
    left: 31vw;
    transform: rotate(134deg);
  }

  .left-to-right:nth-child(2) {
    top: -7vw;
    left: 26vw;
    transform: rotate(129deg);
  }

  .left-to-right:nth-child(3) {
    top: 0vw;
    left: 21vw;
    transform: rotate(123deg);
  }
}

@media (min-width: 1850px) {
  .right-to-left:nth-child(1) {
    top: -4vw;
    left: 17vw;
    transform: rotate(48deg);
  }

  .right-to-left:nth-child(2) {
    top: 1vw;
    left: 22vw;
    transform: rotate(45deg);
  }

  .right-to-left:nth-child(3) {
    top: 6vw;
    left: 28vw;
    transform: rotate(40deg);
  }

  .left-to-right:nth-child(1) {
    top: -9vw;
    left: 30vw;
    transform: rotate(134deg);
  }

  .left-to-right:nth-child(2) {
    top: -4vw;
    left: 25vw;
    transform: rotate(129deg);
  }

  .left-to-right:nth-child(3) {
    top: 2vw;
    left: 21vw;
    transform: rotate(123deg);
  }
}

@media (min-width: 2050px) {
  .right-to-left:nth-child(1) {
    top: -4vw;
    left: 17vw;
    transform: rotate(48deg);
  }

  .right-to-left:nth-child(2) {
    top: 1vw;
    left: 22vw;
    transform: rotate(45deg);
  }

  .right-to-left:nth-child(3) {
    top: 6vw;
    left: 28vw;
    transform: rotate(40deg);
  }

  .left-to-right:nth-child(1) {
    top: -9vw;
    left: 27vw;
    transform: rotate(134deg);
  }

  .left-to-right:nth-child(2) {
    top: -4vw;
    left: 22vw;
    transform: rotate(129deg);
  }

  .left-to-right:nth-child(3) {
    top: 2vw;
    left: 18vw;
    transform: rotate(123deg);
  }
}

@media (min-width: 2350px) {
  .right-to-left:nth-child(1) {
    top: -4vw;
    left: 14vw;
    transform: rotate(48deg);
  }

  .right-to-left:nth-child(2) {
    top: 1vw;
    left: 19vw;
    transform: rotate(45deg);
  }

  .right-to-left:nth-child(3) {
    top: 6vw;
    left: 25vw;
    transform: rotate(40deg);
  }

  .left-to-right:nth-child(1) {
    top: -7vw;
    left: 25vw;
    transform: rotate(134deg);
  }

  .left-to-right:nth-child(2) {
    top: -2vw;
    left: 20vw;
    transform: rotate(129deg);
  }

  .left-to-right:nth-child(3) {
    top: 4vw;
    left: 16vw;
    transform: rotate(123deg);
  }
}

@media (min-width: 2600px) {
  .right-to-left:nth-child(1) {
    top: -4vw;
    left: 11vw;
    transform: rotate(48deg);
  }

  .right-to-left:nth-child(2) {
    top: 1vw;
    left: 16vw;
    transform: rotate(45deg);
  }

  .right-to-left:nth-child(3) {
    top: 6vw;
    left: 22vw;
    transform: rotate(40deg);
  }

  .left-to-right:nth-child(1) {
    top: -7vw;
    left: 22vw;
    transform: rotate(134deg);
  }

  .left-to-right:nth-child(2) {
    top: -2vw;
    left: 17vw;
    transform: rotate(129deg);
  }

  .left-to-right:nth-child(3) {
    top: 4vw;
    left: 13vw;
    transform: rotate(123deg);
  }
}
</style>
