<template>
  <section class="section section--light section--divided">
    <div class="column column--info">
      <h1 class="title">
        HackathonUSP
      </h1>
      <p class="description description--long">
        Maior evento do USPCodeLab, feito em parceria com o Núcleo de
        Empreendedorismo da USP (NEU). Voltado para USPianos, patrocinado pela
        reitoria da USP e empresas parceiras, focado em quem vai participar de
        um hackathon pela primeira vez!
      </p>
      <Button link="hackathonusp">Saiba mais</Button>
    </div>
    <div class="divider" />
    <div class="column column--photo">
      <img
        src="@/assets/logos/hackathon-usp.svg"
        alt="Logo do HackathonUSP"
        class="logo"
      />
    </div>
  </section>
</template>

<script>
import Button from "@/components/util/Button.vue";

export default {
  components: {
    Button
  }
};
</script>
