<template>
  <b-row id="code-schools" tag="section" class="code-schools px-3 py-5 px-sm-5">
    <b-col sm="12">
      <h2 class="text-primary text-center">
        CodeSchools
      </h2>
      <p class="text-center">
        Escolas de férias para desenvolvimento de projetos em equipe
        usando as tecnologias mais modernas. Uma verdadeira experiência
        de desenvolvimento!
      </p>
    </b-col>

    <b-col sm="12" class="code-schools__showcase text-center py-3">
      <b-carousel class="code-schools__showcase__carousel"
                  controls indicators interval="4000">
        <b-carousel-slide img-src="~/assets/summer-school2-min.jpeg"/>
        <b-carousel-slide img-src="~/assets/summer-school3-min.jpeg"/>
        <b-carousel-slide img-src="~/assets/summer-school4-min.jpeg"/>
      </b-carousel>
    </b-col>
  </b-row>
</template>

<style lang="scss">
.code-schools {
  color: theme-color("light");
  background-color: theme-color("dark");

  &__showcase {
    display: flex;
    justify-content: center;
  }
}

@include media-breakpoint-up(lg) {
  .code-schools__showcase__carousel {
    max-width: 50vw;
  }
}
</style>
