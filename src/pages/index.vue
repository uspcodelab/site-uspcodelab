<template>
  <main class="page">
    <the-header />
    <about-dev-journey />
    <reunion-call />
    <about-hackathon-usp />
  </main>
</template>

<script>
import AboutHackathonUsp from "@/components/index/AboutHackathonUsp.vue";
import AboutDevJourney from "@/components/index/AboutDevJourney.vue";
import ReunionCall from "@/components/index/ReunionCall.vue";
import TheHeader from "@/components/index/TheHeader.vue";

export default {
  metaInfo: {
    title: "USPCodeLab - Estimulando a inovação tecnológica na USP",
    meta: [
      {
        name: "description",
        content:
          "O USPCodeLab é um grupo de extensão sediado no IME-USP, cuja missão é estimular a inovação tecnológica na universidade. Atualmente, fazemos isso através do dev.journey() - que é composto por 6 partes: dev.learn(), dev.boost(), dev.hack(), dev.hire(), dev.camp() e dev.research() - e de diversos hackathons e hackdays, sendo o HackathonUSP o maior evento."
      },
      {
        name: "keywords",
        content:
          "USPCodeLab, USPCodeLabs, CodeLab, CodeLabs, HackathonUSP, dev journey, IME, USP, hackathon"
      }
    ]
  },
  components: {
    TheHeader,

    AboutHackathonUsp,
    AboutDevJourney,
    ReunionCall
  }
};
</script>
