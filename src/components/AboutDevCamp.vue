<template>
  <section id="dev-camp" class="bg-ucl-black text-ucl-light px-4 py-20 text-center">
    <h1 class="title text-4xl font-bold tracking-wide pb-4">
      dev.camp()
    </h1>
    <p class="lg:text-xs text-center leading-normal mb-4 pb-4">
      Escolas de férias voltadas ao desenvolvimento de projetos em equipe
      usando as tecnologias mais modernas. Uma verdadeira experiência
      de desenvolvimento!
    </p>
    <div class="flex flex-col items-center">
      <carousel :autoplay="true"
                :autoplay-timeout="3000"
                :loop="true"
                :pagination-enabled="true"
                :pagination-active-color="'#f8f9fA'"
                :pagination-color="'#505050'"
                :per-page="1"
                class=" md:w-1/2">
        <slide>
          <img src="@/assets/dev-camp/team-process.jpg">
        </slide>
        <slide>
          <img src="@/assets/dev-camp/team-request.jpg">
        </slide>
        <slide>
          <img src="@/assets/dev-camp/team-user.jpg">
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide
  }
};
</script>
