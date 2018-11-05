<template>
  <section id="hackathon-usp" class="text-ucl-black px-8 md:px-12 lg:px-20 xl:px-0 py-20">
    <div class="container mx-auto flex flex-wrap flex-row-reverse">
      <div class="w-full md:w-1/2 flex items-end md:items-center justify-center md:pb-4">
        <img src="@/assets/logos/hackathon-usp.svg" alt="Logo do HackathonUSP" class="max-h-half-screen pb-5">
      </div>
      <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center">
        <h1 class="text-ucl-orange text-4xl font-bold tracking-wide pb-4">
          HackathonUSP
        </h1>
        <p class="lg:text-xs text-grey-darker leading-normal mb-4">
          Maior evento do USPCodeLab, feito em parceria com o 
          <a href="http://www.uspempreende.org" class="text-ucl-orange hover:text-ucl-orange-dark no-underline hover:no-underline">Núcleo de Empreendedorismo da USP (NEU)</a>. 
          Voltado para USPianos, patrocinado pela reitoria da USP e empresas parceiras,
          focado em quem vai participar de um hackathon pela primeira vez!
        </p>
        <Button message="Saiba mais" link="https://uclab.xyz/hack"/>
      </div>
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
