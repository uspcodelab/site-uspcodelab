<template>
  <section class="section section--light">
    <h1 class="title">
      Membros da equipe USPCodeLab!
    </h1>
    <card-list :array="membersArray" />
  </section>
</template>

<script>
import CardList from "@/components/members/CardList.vue";

import brunoScholl from "@/assets/members/brunoScholl.jpg";
import caioAndrade from "@/assets/members/caioAndrade.jpg";
import edioCerati from "@/assets/members/edioCerati.jpg";
import fernandoFreire from "@/assets/members/fernandoFreire.jpg";
import joaoDaniel from "@/assets/members/joaoDaniel.jpg";
import leandroRodrigues from "@/assets/members/leandroRodrigues.jpg";
import leonardoLana from "@/assets/members/leonardoLana.jpg";
import lucasCivile from "@/assets/members/lucasCivile.jpg";
import renatoCordeiro from "@/assets/members/renatoCordeiro.jpg";
import victorHugo from "@/assets/members/victorHugo.jpg";
import wanderSouza from "@/assets/members/wanderSouza.jpg";
import washingtomLuiz from "@/assets/members/washingtomLuiz.jpg";
import ygorTavela from "@/assets/members/ygorTavela.jpg";

import devLearnLogo from "@/assets/dev-journey/dev-learn.svg";
import devBoostLogo from "@/assets/dev-journey/dev-boost.svg";
import devCampLogo from "@/assets/dev-journey/dev-camp.svg";
import devHackLogo from "@/assets/dev-journey/dev-hack.svg";
import devHireLogo from "@/assets/dev-journey/dev-hire.svg";
import devResearchLogo from "@/assets/dev-journey/dev-research.svg";


export default {
  components: {
    CardList
  },
  data() {
    return {
      membersArray: [
        {
          title: "Bruno Scholl",
          description: "",
          imgUrl: brunoScholl,
          imgAlt: "Foto de brunoSchool",
          imgClass: "justify-center",
          linkTo: ""
        },
        {
          title: "Caio Andrade",
          description: "",
          roles: {devLearnLogo}, 
          imgUrl: caioAndrade,
          imgAlt: "Foto de Caio Andrade",
          imgClass: "",
          linkTo: "",
          "labels": [
            {
              "name": "dev.learn()",
              "iconPrefix": "fab",
              "iconName": "discord",
              "ariaLabelledBy": "techDiscord",
              "iconTitle": "Logo Discord"
            },
          ]
        },
        {
          title: "Édio Cerati",
          description: "",
          imgUrl: edioCerati,
          imgAlt: "Foto de Édio Cerati",
          imgClass: "",
          linkTo: ""
        },
        {
          title: "Fernando Freire",
          description:"",
          imgUrl: fernandoFreire,
          imgAlt: "Foto de Fernando Freire",
          imgClass: "",
          linkTo: ""
        },
        {
          title: "João Daniel",
          description: "",
          imgUrl: joaoDaniel,
          imgAlt: "Foto de João Daniel",
          imgClass: "",
          linkTo: ""
        },
        {
          title: "Leandro Rodrigues",
          description: "",
          imgUrl: leandroRodrigues,
          imgAlt: "Foto de Leandro Rodrigues",
          imgClass: "",
          linkTo: ""
        },
        {
          title: "Leonardo Lana",
          description:"",
          imgUrl: leonardoLana,
          imgAlt: "Foto de Leonardo Lana",
          imgClass: "",
          linkTo: ""
        },
        {
          title: "Lucas Civile",
          description: "",
          imgUrl: lucasCivile,
          imgAlt: "Foto de Lucas Civile",
          imgClass: "",
          linkTo: ""
        },
        {
          title: "Renato Cordeiro",
          description:"",
          imgUrl: renatoCordeiro,
          imgAlt: "Foto de Renato Cordeiro",
          imgClass: "",
          linkTo: ""
        },
        {
          title: "Victor Hugo",
          description:"",
          imgUrl: victorHugo,
          imgAlt: "Foto de Victor Hugo",
          imgClass: "",
          linkTo: ""
        },
        {
          title: "Wander Souza",
          description:"",
          imgUrl: wanderSouza,
          imgAlt: "Foto de Wander Souza",
          imgClass: "",
          linkTo: ""
        },
        {
          title: "Washingtom Luiz",
          description: "",
          imgUrl: washingtomLuiz,
          imgAlt: "Foto de Washingtom Luiz",
          imgClass: "",
          linkTo: ""
        },
        {
          title: "Ygor tavela",
          description:"",
          imgUrl: ygorTavela,
          imgAlt: "Foto de Ygor Tavela",
          imgClass: "",
          linkTo: ""
        }
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
