<template>
  <section
    id="hackathon-usp"
    class="text-ucl-black px-8 md:px-12 lg:px-20 xl:px-0 pt-20 pb-32 md:pb-20"
  >
    <div class="container mx-auto flex flex-wrap flex-row-reverse">
      <div
        class="w-full md:w-1/2 flex items-end md:items-center justify-center -my-20 md:my-0 md:pb-4"
      >
        <img
          src="@/assets/logos/cli.svg"
          alt="Logo do HackathonUSP"
          class="max-h-half-screen pb-5"
        >
      </div>
      <div
        class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center"
      >
        <h1 class="text-ucl-orange text-4xl font-thin tracking-wide pb-4">
          Quem somos?
        </h1>
        <p class="lg:text-xs text-grey-darker leading-loose mb-6 md:mb-4">
          Apaixonados por Web e Hackathons,
          <b>tivemos, em 2015, a nossa estreia no IME-USP.</b> Embora sejamos o
          primeiro polo, o USPCodelab Butantã é apenas um de alguns outros da
          <b>Codelab Initiative</b>, ou CLI.
        </p>
        <Button link="about">Saiba mais</Button>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>
