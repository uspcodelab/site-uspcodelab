<template>
  <section class="section section--light">
    <h1 class="title">
      Últimas hackathons realizados pelo dev.hack()
    </h1>
    <card-list :array="devHacks" />
  </section>
</template>

<script>
import CardList from "@/components/dev-hack/DevHackCardList.vue";


import HackFools2019 from "@/assets/dev-hack/hackfools2019.jpg";
import HackathonUSP20182 from "@/assets/dev-hack/hackathonusp2018.2.jpg";
import HackathonUSP20181 from "@/assets/dev-hack/hackathonusp2018.1.jpg";
import HackFools2018 from "@/assets/dev-hack/hackfools2018.jpg";

export default {
  components: {
    CardList
  },
  data() {
    return {
      devHacks: [
        {
          title: "HackFools 2019",
          description:
            "Hackday temático de Primeiro de Abril. Dessa vez foi realizado no escritório do Facebook em São Paulo",
          imgUrl: HackFools2019,
          imgAlt: "Ícone dev.learn()",
          imgClass: " h-full py-0 px-8",
          linkTo: "https://www.facebook.com/events/337163040246689/"
        },
        {
          title: "Hackathon USP 2018.2",
          description:
            "Hackathon USP do segundo semestre de 2018. Aconteceu no IME-USP e teve como tema a sustentabilidade financeira da Universidade",
          imgUrl: HackathonUSP20182,
          imgAlt: "Ícone dev.learn()",
          imgClass: " h-full py-0 px-8",
          linkTo: "https://www.facebook.com/events/306232606826186/"
        },
        {
          title: "Hackathon USP 2018.1",
          description:
            "No primeiro semestre de 2018, o Hackathon USP foi realizado no IME_USP e tinha como tema a aplicação de Data Science para melhorar o dia a dia universitário",
          imgUrl: HackathonUSP20181,
          imgAlt: "Ícone dev.learn()",
          imgClass: " h-full py-0 px-8",
          linkTo: "https://www.facebook.com/events/2085561008395172/"
        },
        {
          title: "HackFools 2018",
          description:
            "A primeira edição do HackFools aconteceu na sede ca Codus Tecnologia, em São Paulo. A temática irreverente foi \"ideias convincentes que dão em nada\"",
          imgUrl: HackFools2018,
          imgAlt: "Ícone dev.learn()",
          imgClass: " h-full py-0 px-8",
          linkTo: "https://www.facebook.com/events/1803539679691408/"
        },
      ]
    };
  }
};
</script>

<style scoped>
.section {
  @apply bg-ucl-white;
}

.title {
  @apply text-ucl-orange;
}

.description {
  @apply text-ucl-black;
}
</style>
