<template>
  <section id="webdev" class="mt-20 text-center">
    <div class="mb-10 tracking-wide leading-loose">
      <div class="py-5 bg-ucl-orange mb-10">
        <custom-transition type="fade">
          <h1 class="text-ucl-white text-center text-6xl">Webdev</h1>
        </custom-transition>
      </div>
      <div class="mt-10 md:mt-16 container mx-auto">
        <custom-transition type="top">
          <div class="mx-2 leading-loose text-grey-darker">
            Anualmente, o USPCodelab promove o <b>Webdev</b>, um curso
            <span class="text-ucl-orange"
            >introdutório de Desenvolvimento Web lecionado pelos próprios
            membros do grupo</span
            >. É voltado para
            <b>iniciantes e para aqueles mais avançados</b> que se interessam
            por aprender Desenvolvimento Web. O curso está sempre aberto a todos
            os alunos da Universidade de São Paulo. Geralmente, possui duração
            de 10 aulas, que devem ocorrer semanalmente ao longo do
            <b>primeiro semestre.</b>
          </div>
        </custom-transition>
      </div>
    </div>
    <div class="leading-loose flex flex-col items-center">
      <custom-transition type="bottom">
        <Button link="https://www.instagram.com/p/Cc9UR-suy20/">
          Veja imagens
        </Button>
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
          <a :href="media.url">
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

import Button from "@/components/Button";

export default {
  components: {
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
