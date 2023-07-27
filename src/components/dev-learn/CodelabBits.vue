<template>
  <section id="bits" class="pb-20 text-center">
    <div class="mb-10 md:mb-20 tracking-wide py-20 bg-ucl-black">
      <custom-transition type="fade">
        <p class="text-ucl-orange mb-8 text-center text-5xl font-pixeloid">
          CODELAB
          <span>
            <span style="color: #ff34d2; margin-left: 0px"> B</span>
            <span style="color: #05ff00">I</span>
            <span style="color: #24ffff">T</span>
            <span style="color: #ff0000">S</span>
          </span>
        </p>
      </custom-transition>
      <custom-transition type="top">
        <span class="text-ucl-white mx-2">
          Com o Codelab Bits, o Codelab entra de cabeça nas redes sociais mais
          populares da web.
        </span>
      </custom-transition>
    </div>
    <div class="container mx-auto flex flex-wrap flex-col leading-loose">
      <div
        v-for="(media, i) in medias"
        :key="media.title"
        :class="{ 'flex-row-reverse': i % 2 }"
        class="flex flex-wrap justify-between mb-20 rounded shadow-md md:shadow-none pb-10 mx-2 md:pb-0 pt-5 md:pt-5 px-10 md:px-0"
      >
        <div class="text-center md:text-left w-full md:w-9/20 mb-4 md:mb-0">
          <custom-transition :type="i % 2 ? 'right' : 'left'">
            <h1
              :style="{ color: media.titleColor }"
              class="font-light mb-5 md:mb-0 font-pixeloid"
            >
              <a :href="media.icon.url">
                <font-awesome-icon
                  :icon="{
                    prefix: media.icon.iconPrefix,
                    iconName: media.icon.iconName,
                  }"
                  :style="{ color: media.titleColor }"
                  :aria-labelledby="media.icon.ariaLabelledBy"
                  :title="media.icon.iconTitle"
                  class="text-5xl -mb-1 mr-2 rounded-full"
                />
              </a>
              {{ media.title }}
            </h1>
          </custom-transition>
          <custom-transition type="fade">
            <span class="text-grey-darker lg:text-xs">
              {{ media.description }}
            </span>
          </custom-transition>
          <custom-transition type="fade">
            <div class="mt-4">
              <Button :link="media.icon.url" :theme="media.title">
                Acessar
              </Button>
            </div>
          </custom-transition>
        </div>
        <a
          :href="media.icon.url"
          class="w-full h-full md:w-1/2 md:h-1/2 mt-4 md:mt-0"
        >
          <custom-transition :type="i % 2 ? 'left' : 'right'">
            <img
              :src="media.src"
              :style="{
                'box-shadow':
                  media.titleColor +
                  ' -4px 4px, rgba(149, 157, 165, 0.2) 0px 8px 24px',
              }"
            >
          </custom-transition>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import YoutubeImage from "@/assets/dev-learn/youtube.png";
import InstagramImage from "@/assets/dev-learn/instagram.png";

import socialMedias from "@/json/socialMedias.json";

import Button from "@/components/Button";

export default {
  components: {
    Button,
  },
  data() {
    return {
      medias: [
        {
          title: "Youtube",
          titleColor: "#ff0000",
          description: `
            Desde 2019, administramos o canal do YouTube USPCodelab, onde postamos vídeos educativos sobre computação. Estes, que geralmente são produzidos pelos membros, abrangem desde cursos introdutórios até técnicas de programação mais avançadas.`,
          src: YoutubeImage,
          icon: socialMedias.find((sm) => sm.iconName === "youtube"),
        },
        {
          title: "Instagram",
          titleColor: "#ff34d2",
          description: `
            Ultimamente, não temos utilizado o Instagram tanto quanto em
            alguns outros momentos. Entretanto, ainda serve como um local de divulgação conteúdos e eventos do Codelab Butantã.
            `,
          src: InstagramImage,
          icon: socialMedias.find((sm) => sm.iconName === "instagram"),
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  border-radius: 20px;
  transition: ease-out 0.05s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px, #ff6900 -10px 10px,
    rgba(149, 157, 165, 0.2) -25px 8px 24px;
}

img:hover {
  transform: scale(1.02);
}

p > span {
  margin: -5.3px;
}
</style>
