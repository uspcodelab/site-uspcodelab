<template>
  <b-row id="hackathon-usp" tag="section" class="hackathon-usp px-3 py-5 px-sm-5">
    <b-col sm="6" class="hackathon-usp__logo py-5 py-sm-0">
      <img src="@/assets/logos/hackathon-usp.svg">
    </b-col>

    <b-col sm="6" class="hackathon-usp__text py-5 py-sm-0">
      <h1 class="title text-center text-md-left pb-3">
        HackathonUSP
      </h1>
      <p class="text-center text-md-left">
        Maior evento do USPCodeLab, feito em parceria com o <a href="http://www.uspempreende.org">Núcleo de Empreendedorismo da USP (NEU)</a>. Voltado para USPianos,
        patrocinado pela reitoria da USP e empresas parceiras,
        focado em quem vai participar de um hackathon pela primeira vez!
      </p>
      <Button message="Saiba mais" link="https://uclab.xyz/hack" />
    </b-col>
  </b-row>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button
  }
};
</script>


<style lang="scss">
.hackathon-usp {
  color: $ucl-black;

  a {
    color: $ucl-orange;

    &:hover {
      color: $ucl-orange-dark;
      text-decoration: none;
    }
  }

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

@media (min-width: 768px) {
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
