<template>
  <section id="hackathon-usp" class="text-ucl-black px-8 md:px-12 lg:px-20 xl:px-0 pt-20 pb-32 md:pb-20">
    <div class="container mx-auto flex flex-wrap flex-row-reverse">
      <div class="w-full md:w-1/2 flex items-end md:items-center justify-center -my-20 md:my-0 md:pb-4">
        <img src="@/assets/logos/cli.svg" alt="Logo da CLI" class="max-h-half-screen pb-5" />
      </div>
      <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center">
        <h1 class="text-ucl-orange text-4xl font-thin tracking-wide pb-4">
          Quem somos?
        </h1>
        <p class="lg:text-xs text-grey-darker leading-loose mb-6 md:mb-4">
          Interessados por <b>Hackathons e Engenharia de Software</b>, o <b class="text-ucl-orange">
            USPCodelab</b> é uma organização universitária fundada na
          <b>Universidade de São Paulo</b> que visa incentivar a criação de ideias
          inovadoras e o desenvolvimento de inovações tecnológicas.
        </p>
        <Button link="#reunion-call" onclick="toggleContacts()">Entre em contato!</Button>
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
  data() {
    return {
      contacts: false,
    };
  },
  methods: {
    toggleContacts() {
      this.contacts = !this.contacts;
    },
  },
};
</script>
