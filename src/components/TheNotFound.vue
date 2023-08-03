<template>
  <section
    id="not-found"
    class="bg-ucl-white text-ucl-black px-8 md:px-12 lg:px-20 xl:px-0"
  >
    <div
      class="container mx-auto flex flex-col items-center justify-center h-screen"
    >
      <span
        class="text-ucl-orange text-4xl font-bold tracking-wide pb-8 cursor-default select-none"
      >
        0000 0100<br />
        0000 0000<br />
        0000 0100
      </span>
      <h1
        class="text-ucl-orange text-2xl text-center font-bold tracking-wide pb-4"
      >
        Página não encontrada!
      </h1>
      <p class="lg:text-xs text-center leading-normal mb-4 pb-4">
        Hmm...De fato, parece que não há nada aqui...<br />
        Verifique se o endereço foi digitado corretamente ou clique no botão
        abaixo para voltar à nossa página inicial.
      </p>
      <Button link="/" message="Voltar à página inicial">
        Voltar à página inicial
      </Button>
      <hr class="w-full mt-8 pb-2 border-t border-grey-light" />
      <img
        src="@/assets/logos/ucl-mark-grey-alpha-reverse.png"
        alt="Logo do USPCodeLab"
        class="h-16"
      />
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  metaInfo: {
    title:
      "Página não encontrada | USPCodeLab - Estimulando a inovação tecnológica na USP!",
  },
  components: {
    Button,
  },
  mounted() {
    /* eslint-disable no-console */
    console.log(
      "%c404 Not Found | USP%cCode%cLab",
      "font-size:14px; font-weight: bold;",
      "color: #ff690a; font-weight:bold; font-size: 14px",
      "font-size:14px; font-weight: bold;"
    );
  },
};
</script>
