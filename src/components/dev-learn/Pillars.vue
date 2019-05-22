<template>
  <section id="stages" class="bg-ucl-white text-ucl-black px-8 md:px-12 lg:px-20 xl:px-0 py-20">
    <div class="container mx-auto">
      <h1 class="text-ucl-orange text-4xl font-thin text-center pb-4 tracking-wide">
        Estágios
      </h1>
      <p class="lg:text-sm text-grey-darker text-center leading-normal mb-4 pb-4">
        O programa semestral do curso dev.learn() pode ser dividido em 3 estágios:
      </p>
      <card-list :array="devLearnPillars" />
    </div>
  </section>
</template>

<script>
import CardList from "@/components/util/CardList.vue";


import progImage from "@/assets/pillars/prog.png";
import fundImage from "@/assets/pillars/fundamentals.jpg";
import advanceImage from "@/assets/pillars/advance.png";

import devLearnPillars from "@/json/devLearnPillars.json";

export default {
  components: {
    CardList
  },
  data() {
    return {
      devLearnPillars: [
        {
          "title": "Programação",
          "description":
            "Onde os alunos são introduzidos a conceitos básicos de programação para web, que mais tarde utilizarão para desenvolver suas aplicações",
          "imgUrl": progImage,
          "imgAlt": "ProgImage",
          "imgClass": "mt-1 h-64 w-64 self-center",
          "to": ""
        },
        {
          "title": "Fundamentos",
          "description":
            "Como a internet funciona? Internet é o mesmo que web? Como desenvolvedores fazem navegadores fazerem mágica em todos os lgares do mundo?",
          "imgUrl": fundImage,
          "imgAlt": "fundImage",
          "imgClass": "mt-6 h-64 w-64 self-center",
          "to": ""
        },
        {
          "title": "Aprofundamento",
          "description":
            "Já com os conceitos básicos e programação e o conhecimento das ferramentas e linguagens usadas para desenvolver na web, os alunos começam a explorar técnicas mais avançadas para criar sites com efeitos interativos e interessantes.",
          "imgUrl": advanceImage,
          "imgAlt": "advanceImage",
          "imgClass": "mt-6 h-64 w-64 self-center",
          "to": ""
        }
      ]   
    }
  }
};
</script>
