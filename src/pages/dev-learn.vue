<template>
  <main class="page">
    <the-header />
    <dev-learn-image />
    <slides />
    <pillars />
  </main>
</template>

<script>
import TheHeader from "@/components/dev-learn/TheHeader.vue";

import DevLearnImage from "@/components/dev-learn/DevLearnImage.vue";
import Slides from "@/components/dev-learn/Slides.vue";
import Pillars from "@/components/dev-learn/Pillars.vue";

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
    DevLearnImage,
    Pillars,
    Slides
  }
};
</script>
