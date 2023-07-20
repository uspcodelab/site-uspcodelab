<template>
  <section id="hackfools" class="text-center">
    <div class="mb-10 tracking-wide">
      <hackfools-header />
    </div>
    <div class="container mx-auto flex flex-wrap flex-col leading-loose">
      <custom-transition type="fade">
        <h1 class="md:text-left mb-4">Edições Anteriores</h1>
      </custom-transition>
      <div
        v-for="(hfools, i) in hackathons"
        :key="hfools.title"
        class="flex flex-wrap mx-2 md:mx-0 md:justify-between justify-center items-center mb-20 rounded shadow-md md:shadow-none pb-10 pt-10 md:pb-0 pt-5 md:pt-5 px-10 md:px-0"
      >
        <span class="w-1/2 h-1/2 md:w-1/4 md:h-1/4">
          <custom-transition>
            <a :href="hfools.url" target="_blank">
              <img :src="hfools.src" class="rounded-full" >
            </a>
          </custom-transition>
        </span>
        <div class="text-center md:text-left w-full md:w-7/10 mt-4 md:mt-0">
          <custom-transition type="fade">
          <h1 :style="{ color: hfools.titleColor }" class="mb-5 md:mb-0">
            {{ hfools.title }}
          </h1>
          </custom-transition>
          <custom-transition type="top">
            <p class="text-grey-darker">
            {{ hfools.description }}
            </p>
          </custom-transition>
          <div class="pt-5">
          <custom-transition type="bottom" class="mt-3">
            <Button
              :link="hfools.url"
              :theme="hfools.buttonTheme"
              message="Visitar instagram"
            >
              Veja imagens
            </Button>
          </custom-transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Hackfools2022 from "@/assets/dev-hack/Hackfools2022.jpeg";
import Hackfools2023 from "@/assets/dev-hack/Hackfools2023.jpeg";
import Hackfools from "@/assets/dev-hack/Hackfools.jpeg";

import HackfoolsHeader from "./HackfoolsHeader";

import Button from "@/components/Button";

export default {
  components: {
    Button,
    HackfoolsHeader,
  },
  data() {
    return {
      hackathons: [
        {
          title: "Hackfools 2022",
          titleColor: "#ff690a",
          description: `
            Realizado no Instituto de Matemática e Estatística em 2022, o tema escolhido foi
            "Serviços de Pizzaria". Dentre os projetos, destacou-se um
            bot do discord para agilizar pedidos pela rede social (que curiosamente mais atrapalhava que ajudava)
            e um site que (de uma maneira bem extrapolada) permitia o cliente escolher o formato da pizza que gostaria.
            O evento contou tanto com estudantes da EACH quanto com do Butantã.
            `,
          buttonTheme: "default",
          url: "https://www.instagram.com/p/Cee3gI-O4t1/",
          src: Hackfools2022,
        },
        {
          title: "Hackfools 2023",
          titleColor: "purple",
          description: `
            O tema escolhido para 2023 foi "Dominação Mundial". Aqui, os participantes criaram
            ideias mirabolantes (e até enfadonhas) para se dominar o mundo. Tivemos desde uma
            extensão de navegador bizarra até um plano "do mal" que pretendia acabar com o mundo
            para, então, lucrar com o aluguel de bunkers.
            `,
          buttonTheme: "hackfools2023",
          url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
          src: Hackfools2023,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">

p > span {
  margin: -5.3px;
}

img {
  transition: ease-out 0.1s;
}

img:hover {
  transform: scale(1.02);
}
</style>
