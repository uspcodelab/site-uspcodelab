<template>
  <b-row id="dev-camp" tag="section" class="dev-camp px-3 py-5 px-sm-5">
    <b-col sm="12" class="py-5">
      <h1 class="text-primary text-center pb-3">
        dev.camp()
      </h1>
      <p class="text-center">
        Escolas de férias voltadas ao desenvolvimento de projetos em equipe
        usando as tecnologias mais modernas. Uma verdadeira experiência
        de desenvolvimento!
      </p>
    </b-col>

    <b-col sm="12" class="dev-camp__showcase text-center pb-5">
      <b-carousel class="dev-camp__showcase__carousel"
                  controls indicators interval="4000">
        <b-carousel-slide img-src="@/assets/dev-camp/team-process.jpg"/>
        <b-carousel-slide img-src="@/assets/dev-camp/team-request.jpg"/>
        <b-carousel-slide img-src="@/assets/dev-camp/team-user.jpg"/>
      </b-carousel>
    </b-col>
  </b-row>
</template>

<style lang="scss">
.dev-camp {
  color: theme-color("light");
  background-color: theme-color("dark");

  &__showcase {
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 992px) {
  .dev-camp__showcase__carousel {
    max-width: 50vw;
  }
}
</style>
