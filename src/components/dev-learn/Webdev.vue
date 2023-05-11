<template>
  <section class="pb-20 md:pt-20 text-center">
    <div class="container mx-auto flex flex-wrap flex-col leading-loose">
      <div class="mb-10 md:mb-20 tracking-wide">
        <p class="text-ucl-orange mb-8 text-center text-5xl">
         WEBDEV
        </p>
        <span>
          Cursos sobre tecnologia onde os participantes são introduzidos a
          ferramentas e técnicas de desenvolvimento introdutórias e avançadas.
        </span>
      </div>
      <div class="flex flex-wrap justify-between mb-20 rounded shadow-md md:shadow-none pb-20 md:pb-0 pt-5 md:pt-5 px-10 md:px-0">
        alo
      </div>
    </div>
  </section>
</template>

<script>

import YoutubeImage from '@/assets/dev-learn/youtube.png'
import InstagramImage from '@/assets/dev-learn/instagram.png'
  export default {
    data() {
      return {
        medias: [
          {
            title: "Youtube",
            titleColor: "#ff0000",
            description: `
            Desde 2019, administramos o canal do youtube USPCodelab. Postamos
            vídeos educativos sobre computação. Feito por alunos, os vídeos
            abrangem desde cursos introdutórios até técnicas de programação mais
            avançadas.`,
            src: YoutubeImage
          },
          {
            title: "Instagram",
            titleColor: "#ff34d2",
            description: `
            Lorem ipsum dolor sit ametesse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua duis
            `,
            src: InstagramImage
          }
        ]
      }
    }
  }
</script>

<style scoped>
img {
  border-radius: 20px;
  box-shadow: #ff6900 -4px 4px, rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

p > span {
  margin: -5.3px;
}
</style>
