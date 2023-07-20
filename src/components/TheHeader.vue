<template>
  <header
    id="header"
    class="h-screen text-ucl-white flex flex-wrap flex-row-reverse px-3 pt-5 pb-mobile md:pt-navbar md:pb-5"
    :class="'header-' + ucl[state].toLowerCase()"
  >
    <div
      class="w-full md:w-1/2 flex items-end md:items-center justify-center md:pb-4 state-fader"
    >
      <img
        src="@/assets/logos/ucl-butanta.svg"
        class="w-4/5 md:w-3/5 rounded-full cursor-pointer"
        alt="Logo do USPCodeLab"
        @click="nextState"
        v-if="state==0"
      >
      <img
        src="@/assets/logos/ucl-icmc.svg"
        class="w-4/5 md:w-3/5 rounded-full cursor-pointer"
        alt="Logo do USPCodeLab"
        @click="nextState"
        v-if="state==1"
      >
      <img
        src="@/assets/logos/ucl-each.svg"
        class="w-4/5 md:w-3/5 rounded-full cursor-pointer"
        alt="Logo do USPCodeLab"
        @click="nextState"
        v-if="state==2"
      >
      <img
        src="@/assets/logos/ucl-pride.svg"
        class="w-4/5 md:w-3/5 rounded-full cursor-pointer"
        alt="Logo do USPCodeLab"
        @click="nextState"
        v-if="state==ucl.length - 1"
      >
    </div>
    <div
      class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center px-4 md:px-12"
    >
    <h1 class="text-4xl font-bold tracking-wide mb-10 md:mb-2">USPCodeLab <span> {{ ucl[state] }} </span></h1>
      <p class="leading-normal md:leading-tight"> Grupo de extensão universitário que tem como objetivo
      <b>estimular <br/>a
          <vue-typer erase-style="backspace" :erase-delay='70' :text="change" :repeat="0" :pre-erase-delay="2000"></vue-typer>
        </b>
      </p>
    </div>
    <a class="d-hidden md:d-block" :href="'/pets/' + randomPet() + '.jpg'" target="_blank">
    <font-awesome-icon id="pets" class="text-4xl" :icon="{ prefix: 'fas', iconName: 'cat' }" size="lg" aria-labelledby="menuOpenBtn"/>
    </a>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        change: [
          "criatividade na computação.",
          "genialidade de seus membros.",
          "inovação tecnológica na USP."
        ],
        ucl: ["Butantã", "ICMC", "EACH", "Pride"],
        state: 0,
        counter: 0,
        clicksUntilPride: 20
      }
    },
    methods: {
      nextState(){
        this.clicksUntilPride--;
        if(this.clicksUntilPride <= 0){
          this.state = this.ucl.length - 1;
          return
        }
        this.state = (this.state + 1) % (this.ucl.length - 1);
      },
      randomPet() {
        return Date.now() % 17 + 1;
      }
    },
  }
</script>

<style lang="scss">
.header-butantã {
  background-image: linear-gradient(#ff8b46, $ucl-orange);
}

.header-icmc {
  background-image: linear-gradient(#99DACA, #5EC8AE);
}

.header-each {
  background-image: linear-gradient(#EA7BC5, #E23CAA);
}

.header-pride {
  background: repeating-linear-gradient(
    135deg,
    #D50000,
    #D50000 20px,
    #C51162 20px,
    #C51162 40px,
    #AA00FF 40px,
    #AA00FF 60px,
    #6200EA 60px,
    #6200EA 80px,
    #304FFE 80px,
    #304FFE 100px,
    #2962FF 100px,
    #2962FF 120px,
    #0091EA 120px,
    #0091EA 140px,
    #00B8D4 140px,
    #00B8D4 160px,
    #00BFA5 160px,
    #00BFA5 180px,
    #00C853 180px,
    #00C853 200px,
    #64DD17 200px,
    #64DD17 220px,
    #AEEA00 220px,
    #AEEA00 240px,
    #FFD600 240px,
    #FFD600 260px,
    #FFAB00 260px,
    #FFAB00 280px,
    #FF6D00 280px,
    #FF6D00 300px,
    #DD2C00 300px,
    #DD2C00 320px
      );
}

.custom.char {
  color: white;
}

#pets:hover {
  opacity: 100%;
}

#pets {
  position: absolute;
  bottom: 0%;
  opacity: 0%;
  right: 1%;
  color: white;
}

</style>
