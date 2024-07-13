<template>
  <div class="flex flex-col items-center mx-4">
    <custom-transition type="fade">
      <div class="flex flex-col">
        <span class="flex font-inter font-bold uppercase pl-2 -mt-20 -mb-10">
          <img class="flex" src="@/assets/dev-hack/Interhack.svg" />
        </span>
      </div>
    </custom-transition>
    <p class="text-grey-darker">
      O Interhack 2019 é um dos maiores hackathons universitários já feitos
      no Brasil. Com 2 fases, 180 participantes, e ocorrendo em 3 cidades
      diferentes de maneira simultânea, o Interhack 2019 contou com a
      participação de grandes empresas como o <b>Facebook, a B2W, a VTEX e
        Nubank</b>. A equipe vencedora ganhou uma viagem paga para o Vale do Silício.
    </p>
    <custom-transition type="bottom" class="mt-8 flex justify-between">
      <Button link="https://interhack.xyz/2019/" theme="interhack" message="Visitar site Interhack 2019" class="mx-2">
        Site de divulgação
      </Button>
      <Button link="https://www.instagram.com/p/B4qNCJUhsoZ/" theme="interhack"
        message="Visitar instagram Interhack 2019" class="mx-2">
        Imagens
      </Button>
    </custom-transition>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  components: {
    Button,
  },
};
</script>
