<template>
  <b-row id="hackathon-usp" tag="section" class="hackathon-usp px-3 py-5 px-sm-5">
    <b-col sm="6" class="hackathon-usp__logo pb-4 pb-sm-0">
      <img src="~/assets/logos/hackathon-usp.svg">
    </b-col>

    <b-col sm="6" class="hackathon-usp__text">
      <h1 class="text-primary text-center text-md-left pb-3">
        HackathonUSP
      </h1>
      <p class="text-center text-md-left">
        Maior evento do USPCodeLab. Voltado para USPianos,
        patrocinado pela reitoria da USP e empresas parceiras,
        focado em quem vai participar de um hackathon pela primeira vez!
      </p>
    </b-col>
  </b-row>
</template>

<style lang="scss">
.hackathon-usp {
  &__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    img {
      max-height: 40vh;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
}

@include media-breakpoint-up(md) {
  .hackathon-usp__logo {
    order: 2;
    justify-content: center;

    &__img {
      min-width: 0;
      width: 90%;
    }
  }

  .hackathon-usp__text {
    order: 1;
    align-items: left;
    justify-content: center;
  }
}
</style>
