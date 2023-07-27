<template>
  <section
    class="text-ucl-black px-8 md:px-12 lg:px-20 xl:px-0 pt-10 md:pt-32 md:pb-20"
  >
    <div class="container mx-auto flex flex-wrap flex-row-reverse">
      <div
        type="fade"
        class="w-full md:w-1/2 flex items-end md:items-center justify-center pb-8 md:pb-4"
      >
        <dev-learn class="max-h-half-screen max-w-2/3" />
      </div>
      <custom-transition
        type="fade"
        class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center"
      >
        <h1 class="text-ucl-orange text-3xl font-thin tracking-wide pb-4">
          Comece por aqui :)
        </h1>
        <p class="lg:text-xs text-grey-darker leading-loose mb-6 md:mb-4">
          Nessa iniciativa, organizamos
          <b>cursos, palestras e video-aulas gratuitos para todos.</b> O
          conteúdo costuma ser ligado a
          <span class="text-ucl-orange">Web</span>, mas, como somos um grupo de
          Inovação Tecnológica, não há tantas restrições: vamos desde<span
            class="text-ucl-orange"
          >
            conceitos básicos de HTML até métodos ágeis ou conteúdos avançados
            de backend</span
          >. É pensando nessa diversidade que costumeiramente realizamos um
          curso de desenvolvimento web básico em todo início de ano, o<b
          ><span
            v-scroll-to="'#webdev'"
            class="text-ucl-orange cursor-pointer"
          >
            Webdev</span
          ></b
          >, além de estarmos adentrando nas redes sociais com o
          <b
          ><span v-scroll-to="'#bits'" class="text-instagram cursor-pointer"
          >Codelab Bits</span
          ></b
          >, onde facilmente se pode encontrar conteúdos
          <b>diversificados e mais avançados.</b>
        </p>
      </custom-transition>
    </div>
  </section>
</template>
<script>
import DevLearn from "./DevLearnIcon.vue";

export default {
  components: {
    DevLearn,
  },
};
</script>
