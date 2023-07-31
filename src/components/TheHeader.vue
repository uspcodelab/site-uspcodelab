<template>
  <header
    id="header"
    :class="[uclClass[state], 'h-screen', 'text-ucl-white', 'flex', 'flex-wrap', 'flex-col','md:flex-row-reverse', 'justify-center', 'items-center', 'px-3', 'pt-mobile',  'md:pt-navbar', 'md:pb-5']"
    stlye="position: relative"
  >
    <div
      class="w-full md:w-1/2 flex items-end md:items-center justify-center md:pb-4 state-fader pt-24 md:pt-0"
    >
      <img
        src="@/assets/logos/ucl-butanta.svg"
        class="w-4/5 md:w-3/10 rounded-full cursor-pointer"
        style="position: absolute"
        :class="{'z-10': state == 0 }"
        alt="Logo do USPCodeLab Butantã"
        @click="nextState"
      >
      <img
        :class="{'z-10': state == 1 }"
        src="@/assets/logos/ucl-icmc.svg"
        class="w-4/5 md:w-3/10 rounded-full cursor-pointer"
        style="position: absolute"
        alt="Logo do USPCodeLab ICMC"
        @click="nextState"
      >
      <img
        :class="{'z-10': state == 2 }"
        src="@/assets/logos/ucl-each.svg"
        class="w-4/5 md:w-3/10 rounded-full cursor-pointer"
        style="position: absolute"
        alt="Logo do USPCodeLab EACH"
        @click="nextState"
      >
      <img
        :class="{'z-10': state == ucl.length - 1 }"
        src="@/assets/logos/ucl-pride.svg"
        class="w-4/5 md:w-3/10 height: 70% rounded-full cursor-pointer"
        style="position: absolute"
        alt="Logo do USPCodeLab Pride"
        @click="nextState"
      >
    </div>
    <div
      class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center px-4 md:px-12 mt-10 md:mt-0"
    >
      <h1 class="text-4xl font-bold tracking-wide mb-10 md:mb-2">
        USPCodeLab <span> {{ ucl[state] }} </span>
      </h1>
      <p class="leading-normal md:text-lg"
        style="min-height: 10vh"
      >
        Grupo de extensão universitário do IME-USP que tem como objetivo
        <b
          >estimular <br v-if="this.$parent.$parent.isMobile()"/> a
          <vue-typer
            :erase-delay="70"
            :text="change"
            :repeat="0"
            :pre-erase-delay="2000"
            erase-style="backspace"
          />
        </b>
      </p>
    </div>
    <a
      :href="'/pets/' + randomPet + '.jpg'"
      @click="getNewPet()"
      class="hidden md:block"
      target="_blank"
    >
      <font-awesome-icon
        id="pets"
        :icon="{ prefix: 'fas', iconName: 'cat' }"
        class="text-4xl"
        size="lg"
        aria-labelledby="menuOpenBtn"
      />
    </a>
  </header>
</template>

<script>
export default {
  data() {
    return {
      change:
      [
        `criatividade na computação.`,
        `genialidade de seus membros.`,
        `inovação tecnológica na USP.`,
      ],
      ucl: ["Butantã", "ICMC", "EACH", "Pride"],
      uclClass: ["header-butanta", "header-icmc", "header-each", "header-pride"],
      state: 0,
      counter: 0,
      clicksUntilPride: 20,
      randomPet: 1,
    };
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
    getNewPet() {
      this.randomPet = (Date.now() % 17) + 1;
    },
  },
  mounted() {
    this.getNewPet();
  }
};
</script>
<style scoped>

.header-butanta {
  background-image: linear-gradient(#ff8b46, #ff690a);
}

.header-icmc {
  background-image: linear-gradient(#99DACA, #5EC8AE);
}

.header-each {
  background-image: linear-gradient(#EA7BC5, #E23CAA);
}

.header-pride {
  background: linear-gradient(
        45deg,
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
