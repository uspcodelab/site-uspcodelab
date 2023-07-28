<template>
  <header
    id="header"
    :class="[uclClass[state], 'h-screen', 'text-ucl-white', 'flex', 'flex-wrap', 'flex-row-reverse', 'px-3', 'pt-5', 'pb-mobile', 'md:pt-navbar', 'md:pb-5']"
  >
    <div
      class="w-full md:w-1/2 flex items-end md:items-center justify-center md:pb-4 state-fader"
    >
      <img
        v-if="state == 0"
        src="@/assets/logos/ucl-butanta.svg"
        class="w-4/5 md:w-3/5 rounded-full cursor-pointer"
        alt="Logo do USPCodeLab Butantã"
        @click="nextState"
      >
      <img
        v-if="state == 1"
        src="@/assets/logos/ucl-icmc.svg"
        class="w-4/5 md:w-3/5 rounded-full cursor-pointer"
        alt="Logo do USPCodeLab ICMC"
        @click="nextState"
      >
      <img
        v-if="state == 2"
        src="@/assets/logos/ucl-each.svg"
        class="w-4/5 md:w-3/5 rounded-full cursor-pointer"
        alt="Logo do USPCodeLab EACH"
        @click="nextState"
      >
      <img
        v-if="state == ucl.length - 1"
        src="@/assets/logos/ucl-pride.svg"
        class="w-4/5 md:w-3/5 rounded-full cursor-pointer"
        alt="Logo do USPCodeLab Pride"
        @click="nextState"
      >
    </div>
    <div
      class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center px-4 md:px-12"
    >
      <h1 class="text-4xl font-bold tracking-wide mb-10 md:mb-2">
        USPCodeLab <span> {{ ucl[state] }} </span>
      </h1>
      <p class="leading-normal md:leading-tight">
        Grupo de extensão universitário que tem como objetivo
        <b
          >estimular <br v-if="!this.$parent.$parent.isMobile()"/>a
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
      class="d-hidden md:d-block"
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
      change: this.$parent.$parent.isMobile() ? [
        `criatividade na
computação.`,
        `genialidade de
seus membros.`,
        `inovação
tecnológica na USP.`,
      ] :
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
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
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
