<template>
  <b-row id="header" tag="section" class="header p-3 p-sm-5">
    <b-col sm="6" class="header__logo pb-4 pb-sm-0">
      <img src="~/assets/logos/ucl-mark-alpha.svg" class="header__logo__img rounded-circle">
    </b-col>
    <b-col sm="6" class="header__text">
      <h1 class="text-center text-md-left pb-3">
        USPCodeLab
      </h1>
      <p class="lead text-center text-md-left">
        Grupo de extensão universitária que tem como objetivo
        <strong>estimular a inovação tecnológica na USP</strong>
      </p>
    </b-col>
  </b-row>
</template>

<style lang="scss">
.header {
  min-height: calc(100vh - 4rem);

  color: theme-color("light");
  background-image: linear-gradient(#ff8b46, theme-color("primary"));

  &__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    &__img {
      min-width: 50vw;
      width: 80%;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h1 {
      font-family: Montserrat, sans;
      font-weight: 600;
    }

    p.lead strong {
      font-weight: bold;
    }
  }
}

@include media-breakpoint-up(md) {
  .header__logo {
    order: 2;
    justify-content: center;

    &__img {
      min-width: 0;
      width: 90%;
    }
  }

  .header__text {
    order: 1;
    align-items: left;
    justify-content: center;
  }
}

@include media-breakpoint-up(lg) {
  .header__logo__img {
    width: 70%;
  }
}
</style>
