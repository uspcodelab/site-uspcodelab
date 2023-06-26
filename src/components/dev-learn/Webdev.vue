<template>
  <section class="pb-20 md:pt-20 text-center">
    <div class="container mx-auto flex flex-wrap flex-col leading-loose">
      <div class="mb-10 md:mb-20 tracking-wide">
        <p class="text-ucl-orange mb-8 text-center font-bold text-5xl">
         WEBDEV
        </p>
        <span>
          Anualmente, o USPCodelab prove o Webdev, um curso Introdutório de Desenvolvimento
          Web lecionado pelos próprios membros do grupo. É um curso pensado para iniciantes
          e para aqueles que não têm muita noção de Web. Em maioria, são calouros do curso
          de Ciência da Computação do IME que participam, entretanto vale notar que
          é um curso aberto a todos alunos da Universidade de São Paulo. Geralmente possui
          duração de 10 aulas, que ocorrem semanalmente ao longo do primeiro semestre. As
          tecnologias ensinadas são:
        </span>
      </div>
      <div v-for="(media, i) in techs" :key="media.title" class="flex flex-wrap md:justify-between justify-center mb-20 rounded shadow-md md:shadow-none pb-10 pt-10 md:pb-0 pt-5 md:pt-5 px-10 md:px-0">
        <a :href="media.url"
        class="w-1/2 h-1/2 md:w-1/4 md:h-1/4"
          >
        <img
        :src="media.src"
        >
        </a>
        <div class="text-center md:text-left w-full md:w-7/10 mt-4 md:mt-0">
          <h1 class="font-light mb-5 md:mb-0" :style="{ color: media.titleColor }">
            {{ media.title }}
          </h1>
          <span>
            {{ media.description }}
          </span>
        </div>
      </div>
      <carousel-webdev />
    </div>
  </section>
</template>

<script>

import HTMLImage from '@/assets/dev-learn/html.png'
import CSSImage from '@/assets/dev-learn/css.png'
import JSImage from '@/assets/dev-learn/js.png'
import NodeImage from '@/assets/dev-learn/node.png'

import CarouselWebdev from '@/components/dev-learn/CarouselWebdev'

export default {
  data() {
    return {
      techs: [
        {
          title: "HTML",
          titleColor: "#ff0000",
          description: `
            HTML, ou Hypertext Markup Language é uma linguagem de marcação extremamente
            utilizada na Web. Com a possibilidade de hipertextos, configura o "esqueleto
            do site".
          `,
          url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
          src: HTMLImage
        },
        {
          title: "CSS",
          titleColor: "blue",
          description: `
            O estilizador excepcional para o seu site. É com ele que você fará com que o seu
            site desfile pela Web!
          `,
          url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
          src: CSSImage
        },
        {
          title: "JavaScript",
          titleColor: "black",
          description: `
          Ás vezes, as coisas não estão dinâmicas o suficiente. Com o java script,
          isso não é mais problema. Crie seu site como quiser. (mudar)`,
          url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
          src: JSImage
        },
        {
          title: "Node",
          titleColor: "green",
          description: `
          Ok, já aprendeu o básico do front end e quer partir para o back. Aqui é
          a nossa porta de entrada. Com o node, uma ferramenta extremamente poderosa,
          você aprenderá a fazer um backend simples, mas funcional.`,
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction',
          src: NodeImage
        }
      ]
    }
  },
  components: {
    CarouselWebdev
  }
}
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
