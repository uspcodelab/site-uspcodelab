<template>
  <b-row id="dev-camp" tag="section" class="dev-camp px-3 py-5 px-sm-5">
    <b-col sm="12" class="py-5">
      <h1 class="title text-center pb-3">
        dev.camp()
      </h1>
      <p class="text-center">
        Escolas de férias voltadas ao desenvolvimento de projetos em equipe
        usando as tecnologias mais modernas. Uma verdadeira experiência
        de desenvolvimento!
      </p>
    </b-col>
    <b-col sm="12" class="dev-camp__showcase text-center pb-5">
      <carousel :autoplay="true"
                :autoplay-timeout="3000"
                :loop="true"
                :pagination-enabled="true"
                :pagination-active-color="'#f8f9fA'"
                :pagination-color="'#505050'"
                :per-page="1">
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
      <!--
      <b-carousel :interval="4000" class="dev-camp__showcase__carousel"
                  controls indicators>
        <b-carousel-slide img-src="@/assets/logos/ucl-logo-colored-alpha.svg"/>
        <b-carousel-slide img-src="@/assets/dev-camp/team-request.jpg"/>
        <b-carousel-slide img-src="@/assets/dev-camp/team-user.jpg"/>
      </b-carousel>
      -->
    </b-col>
  </b-row>
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


<style lang="scss">
.dev-camp {
  color: $ucl-light;
  background-color: $ucl-black;

  &__showcase {
    display: flex;
    justify-content: center;
  }
}

.VueCarousel {
  width: 80vw;
  height: auto;
}

.VueCarousel-slide {
  img {
    width: 80vw;
    height: auto;
  }
}

@media (min-width: 992px) {
  .VueCarousel {
    width: 50vw;
  }

  .VueCarousel-slide {
    img {
      width: 50vw;
    }
  }
}
</style>
