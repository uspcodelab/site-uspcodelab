<template>
  <section class="pb-20 md:pt-20 text-center">
    <div class="container mx-auto flex flex-wrap flex-col leading-loose">
      <div class="mb-10 md:mb-20 tracking-wide">
        <p class="text-ucl-orange mb-8 text-center font-bold text-5xl">
         WEBDEV
        </p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper vel velit ut lacinia. Maecenas sollicitudin, leo eu aliquet mollis, elit dui tempus nisi, quis pulvinar risus tortor ut metus. Maecenas non placerat risus. Duis sagittis in lectus non ornare. Praesent lacinia convallis purus, vel eleifend lectus laoreet vel. Ut fermentum molestie sollicitudin. Cras varius eleifend eros id congue. Aliquam pharetra semper dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
    </div>
  </section>
</template>

<script>

import HTMLImage from '@/assets/dev-learn/html.png'
import CSSImage from '@/assets/dev-learn/css.png'
import JSImage from '@/assets/dev-learn/js.png'
import NodeImage from '@/assets/dev-learn/node.png'

  export default {
    data() {
      return {
        techs: [
          {
            title: "HTML",
            titleColor: "#ff0000",
            description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper vel velit ut lacinia. Maecenas sollicitudin, leo eu aliquet mollis, elit dui tempus nisi, quis pulvinar risus tortor ut metus. `,
            url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
            src: HTMLImage
          },
          {
            title: "CSS",
            titleColor: "blue",
            description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper vel velit ut lacinia. Maecenas sollicitudin, leo eu aliquet mollis, elit dui tempus nisi, quis pulvinar risus tortor ut metus.`,
            url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
            src: CSSImage
          },
          {
            title: "JavaScript",
            titleColor: "black",
            description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper vel velit ut lacinia. Maecenas sollicitudin, leo eu aliquet mollis, elit dui tempus nisi, quis pulvinar risus tortor ut metus.`,
            url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
            src: JSImage
          },
          {
            title: "Node",
            titleColor: "green",
            description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper vel velit ut lacinia. Maecenas sollicitudin, leo eu aliquet mollis, elit dui tempus nisi, quis pulvinar risus tortor ut metus.`,
              url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction',
            src: NodeImage
          }
        ]
      }
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
