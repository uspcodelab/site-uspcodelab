<template>
  <header
    id="header"
    :class="[
      uclClass[state],
      `h-screen
      text-ucl-white
      flex
      flex-wrap
      flex-col
      md:flex-row-reverse
      justify-center
      items-center
      px-3
      pt-mobile
      md:pt-navbar
      md:pb-5
      relative
      `,
    ]"
  >
    <div
      class="w-full md:w-1/2 flex items-end md:items-center justify-center md:pb-4 state-fader pt-24 md:pt-0"
    >
      <img
        :class="[
          { 'z-10': state == 0 },
          'absolute w-4/5 md:w-3/10 rounded-full cursor-pointer',
        ]"
        src="@/assets/logos/ucl-butanta.svg"
        alt="Logo do USPCodeLab Butantã"
        @click="nextState"
      />
      <img
        v-if="mounted"
        :class="[
          { 'z-10': state == 1 },
          'absolute w-4/5 md:w-3/10 rounded-full cursor-pointer',
        ]"
        src="@/assets/logos/ucl-icmc.svg"
        class="absolute w-4/5 md:w-3/10 rounded-full cursor-pointer"
        alt="Logo do USPCodeLab ICMC"
        @click="nextState"
      />
      <img
        v-if="mounted"
        :class="[
          { 'z-10': state == 2 },
          'absolute w-4/5 md:w-3/10 rounded-full cursor-pointer',
        ]"
        src="@/assets/logos/ucl-each.svg"
        class="absolute w-4/5 md:w-3/10 rounded-full cursor-pointer"
        alt="Logo do USPCodeLab EACH"
        @click="nextState"
      />
      <img
        v-if="mounted"
        :class="[
          { 'z-10': state == ucl.length - 1 },
          'absolute w-4/5 md:w-3/10 rounded-full cursor-pointer',
        ]"
        src="@/assets/logos/ucl-pride.svg"
        class="absolute w-4/5 md:w-3/10 height: 70% rounded-full cursor-pointer"
        alt="Logo do USPCodeLab Pride"
        @click="nextState"
      />
    </div>
    <div
      class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center px-4 md:px-12 mt-10 md:mt-0"
    >
      <h1 class="text-4xl font-bold tracking-wide mb-10 md:mb-2">
        USPCodeLab <span> {{ ucl[state] }} </span>
      </h1>
      <p class="leading-normal md:text-lg" style="min-height: 10vh">
        Grupo de extensão universitário do IME-USP que tem como objetivo
        <b
          >estimular <br v-if="this.$parent.$parent.isMobile()" />
          a
          <vue-typer
            :erase-delay="70"
            :text="change"
            :repeat="0"
            :pre-erase-delay="2000"
            erase-style="backspace"
          />
        </b>
      </p>
      <image-hideout dir-name="pets">
        <font-awesome-icon
          id="pets"
          :icon="{ prefix: 'fas', iconName: 'cat' }"
          size="3x"
          aria-labelledby="menuOpenBtn"
        />
      </image-hideout>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      change: [
        `criatividade na computação.`,
        `genialidade de seus membros.`,
        `inovação tecnológica na USP.`,
      ],
      ucl: ["Butantã", "ICMC", "EACH", "Pride"],
      uclClass: [
        "header-butanta",
        "header-icmc",
        "header-each",
        "header-pride",
      ],
      state: 0,
      counter: 0,
      clicksUntilPride: 20,
      mounted: false,
    };
  },
  mounted() {
    this.mounted = true;
  },
  methods: {
    nextState() {
      this.clicksUntilPride--;
      if (this.clicksUntilPride <= 0) {
        this.state = this.ucl.length - 1;
        return;
      }
      this.state = (this.state + 1) % (this.ucl.length - 1);
    },
  },
};
</script>
<style scoped>
.header-butanta {
  background-image: linear-gradient(#ff8b46, #ff690a);
}

.header-icmc {
  background-image: linear-gradient(#99daca, #5ec8ae);
}

.header-each {
  background-image: linear-gradient(#ea7bc5, #e23caa);
}

.header-pride {
  background: linear-gradient(
    225deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 11%,
    rgba(208, 222, 33, 1) 22%,
    rgba(79, 220, 74, 1) 33%,
    rgba(63, 218, 216, 1) 44%,
    rgba(47, 201, 226, 1) 55%,
    rgba(28, 127, 238, 1) 66%,
    rgba(95, 21, 242, 1) 77%,
    rgba(186, 12, 248, 1) 88%,
    rgba(251, 7, 217, 1) 100%
  );
}

#pets:hover {
  opacity: 1;
}

#pets {
  position: absolute;
  bottom: 0%;
  opacity: 0;
  right: 1%;
  color: white;
}
</style>
