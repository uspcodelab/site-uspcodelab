<template>
  <section id="hackathon-usp" class="hackathon-usp flex flex-wrap flex-row-reverse px-4 py-20">
    <div class="w-full md:w-1/2 flex items-end md:items-center justify-center md:pb-4">
      <img src="@/assets/logos/hackathon-usp.svg" alt="Logo do HackathonUSP" class="hackhathon-usp-logo pb-5">
    </div>
    <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center px-2 md:px-12">
      <h1 class="title text-4xl font-bold tracking-wide pb-4">
        HackathonUSP
      </h1>
      <p class="lg:text-xs text-grey-darker leading-normal mb-4">
        Maior evento do USPCodeLab, feito em parceria com o <a href="http://www.uspempreende.org">Núcleo de Empreendedorismo da USP (NEU)</a>. Voltado para USPianos,
        patrocinado pela reitoria da USP e empresas parceiras,
        focado em quem vai participar de um hackathon pela primeira vez!
      </p>
      <Button message="Saiba mais" link="https://uclab.xyz/hack" />
    </div>
  </section>
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

  .hackhathon-usp-logo {
    max-height: 40vh;
  }
}
</style>
