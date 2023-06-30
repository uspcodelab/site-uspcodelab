<template>
  <section class="mt-20 text-center">
    <div class="mb-10 tracking-wide leading-loose">
      <div class="py-5 bg-ucl-orange mb-10">
        <custom-transition type="fade">
          <h1
            class="text-ucl-white text-center text-6xl"
            >
            Webdev
          </h1>
        </custom-transition>
      </div>
      <div class="mt-10 md:mt-16 container mx-auto">
        <custom-transition type="top">
        <div class="mx-2 leading-loose text-grey-darker">
          Anualmente, o USPCodelab prove o Webdev, um curso Introdutório de
          Desenvolvimento Web lecionado pelos próprios membros do grupo. É um
          curso pensado para iniciantes e para aqueles que não têm muita noção
          de Web. Em maioria, são calouros do curso de Ciência da Computação do
          IME que participam, entretanto vale notar que é um curso aberto a
          todos alunos da Universidade de São Paulo. Geralmente possui duração
          de 10 aulas, que ocorrem semanalmente ao longo do primeiro semestre.
        </div>
        </custom-transition>
      </div>
    </div>
    <div class="leading-loose flex flex-col items-center">
      <custom-transition type="bottom">
        <Button link="https://www.instagram.com/p/Cc9UR-suy20/"> Veja imagens </Button>
      </custom-transition>

      <p class="text-ucl-orange text-center font-bold text-5xl mt-10 mb-4">
      Tecnologias
      </p>

      <div class="flex justify-center items-center mx-10 max-w-xl">
        <custom-transition
          v-for="(media, i) in techs"
          :key="media.title"
          class="mx-2 md:mx-10 mb-20"
          type="fade"
          >
          <a :href="media.url" >
            <img :src="media.src" />
          </a>
        </custom-transition>
      </div>
    </div>
  </section>
</template>

<script>
import HTMLImage from "@/assets/dev-learn/html.png";
import CSSImage from "@/assets/dev-learn/css.png";
import JSImage from "@/assets/dev-learn/js.png";
import NodeImage from "@/assets/dev-learn/node.png";

import CarouselWebdev from "@/components/dev-learn/CarouselWebdev";
import Button from "@/components/Button";

export default {
  components: {
    CarouselWebdev,
    Button,
  },
  data() {
    return {
      techs: [
        {
          url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
          src: HTMLImage,
        },
        {
          url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
          src: CSSImage,
        },
        {
          url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
          src: JSImage,
        },
        {
          url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction",
          src: NodeImage,
        },
      ],
    };
  },
};
</script>

<style scoped>
p > span {
  margin: -5.3px;
}

img {
  transition: ease-out 0.05s;
}

img:hover {
  transform: scale(1.02);
}
</style>
