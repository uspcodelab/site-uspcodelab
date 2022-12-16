<template>
  <section id="hackathon-usp" class="text-ucl-black px-8 md:px-12 lg:px-20 xl:px-0 py-20">
    <div class="container mx-auto flex flex-wrap flex-row-reverse">
      <div class="w-full md:w-1/2 flex items-end md:items-center justify-center md:pb-4">
        <img src="@/assets/logos/hackathon-usp.svg" alt="Logo do HackathonUSP" class="max-h-half-screen pb-5">
      </div>
      <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center">
        <h1 class="text-ucl-orange text-4xl font-thin tracking-wide pb-4">
          Hackathons
        </h1>
        <p class="lg:text-xs text-gray-600 leading-normal mb-4">
          Fique por dentro dos nossos eventos de Hackathon que realizamos e apoiamos. Conheça também
          os eventos passados!
        </p>
        <Button link="hackathons">Saiba mais</Button>
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
