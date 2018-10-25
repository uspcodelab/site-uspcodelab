<template>
  <header class="header w-screen flex flex-wrap flex-row-reverse px-3 pt-5 md:pb-5 pb-footer">
    <div class="w-full md:w-1/2 flex items-end md:items-center justify-center md:pb-4">
      <img src="@/assets/logos/ucl-mark-alpha.svg" class="w-4/5 rounded-circle">
    </div>
    <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center px-4 md:px-12">
      <h1 class="font-bold tracking-wide">
        USPCodeLab
      </h1>
      <p class="text-xl">
        Grupo de extensão universitária que tem como objetivo
        <b>estimular a inovação tecnológica na USP</b>
      </p>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  min-height: calc(100vh - 4rem);

  color: $ucl-light;
  background-image: linear-gradient(#ff8b46, $ucl-orange);

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

@media (min-width: 768px) {
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

@media (min-width: 992px) {
  .header__logo__img {
    width: 70%;
  }
}
</style>
