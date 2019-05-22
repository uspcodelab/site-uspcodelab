<template>
  <main class="page">
    <the-header />
    <previous-dev-hacks />
    <!-- <previous-dev-camps /> -->
  </main>
</template>

<script>
import TheHeader from "@/components/dev-hack/TheHeader.vue";
import PreviousDevHacks from "@/components/dev-hack/PreviousDevHacks.vue";
// import PreviousDevCamps from "@/components/dev-camp/PreviousDevCamps.vue";

export default {
  metaInfo: {
    title: "UCL::dev.camp()",
    meta: [
      {
        name: "description",
        content: `
          O dev.camp() é uma das partes do dev.journey(), oferecido pelo USPCodeLab.  Consiste numa escola de férias que serve de formatura para os alunos do dev.learn() e dev.boost(), envolvendo um projeto grande com múltiplos times mistos.
        `
      },
      {
        name: "keywords",
        content:
          "dev camp, dev.camp, dev.camp(), USPCodeLab, USPCodeLabs, CodeLab, CodeLabs, dev journey"
      }
    ]
  },
  components: {
    TheHeader,
    PreviousDevHacks,
    // PreviousDevCamps
  }
};
</script>
