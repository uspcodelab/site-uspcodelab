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
import ricardoKojo from "@/assets/members/ricardoKojo.jpg";
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
          imgClass: "rounded-full  h-64 w-64",
          linkTo: "",
          "roles": [
            {
              name: "dev.camp()",
              imgUrl: devCampLogo,
              imgAlt: "dev.camp()"
            }, 
          ]
        },
        {
          title: "Caio Andrade",
          description: "",
          roles: {devLearnLogo}, 
          imgUrl: caioAndrade,
          imgAlt: "Foto de Caio Andrade",
          imgClass: "rounded-full  h-64 w-64 ",
          linkTo: "",
          "roles": [
            {
              name: "dev.learn()",
              imgUrl: devLearnLogo,
              imgAlt: "dev.learn()"
            },
            {
              name: "dev.boost()",
              imgUrl: devBoostLogo,
              imgAlt: "dev.boost()"
            },
            {
              name: "dev.camp()",
              imgUrl: devCampLogo,
              imgAlt: "dev.camp()"
            }, 
            {
              name: "dev.hack()",
              imgUrl: devHackLogo,
              imgAlt: "dev.hack()"
            }, 
          ]
        },
        {
          title: "Édio Cerati",
          description: "",
          imgUrl: edioCerati,
          imgAlt: "Foto de Édio Cerati",
          imgClass: "rounded-full  h-64 w-64 ",
          linkTo: "",
          "roles": [
            {
              name: "dev.hack()",
              imgUrl: devHackLogo,
              imgAlt: "dev.hack()"
            },
            {
              name: "dev.camp()",
              imgUrl: devCampLogo,
              imgAlt: "dev.camp()"
            }, 
          ]
        },
        {
          title: "Fernando Freire",
          description:"",
          imgUrl: fernandoFreire,
          imgAlt: "Foto de Fernando Freire",
          imgClass: "rounded-full object-contain  h-64 w-64 ",
          linkTo: "",
          "roles": [
            {
              name: "dev.hack()",
              imgUrl: devHackLogo,
              imgAlt: "dev.hack()"
            }, 
            {
              name: "dev.camp()",
              imgUrl: devCampLogo,
              imgAlt: "dev.camp()"
            }, 
          ]
        },
        {
          title: "João Daniel",
          description: "",
          imgUrl: joaoDaniel,
          imgAlt: "Foto de João Daniel",
          imgClass: "rounded-full  h-64 w-64 ",
          linkTo: "",
          "roles": [
            {
              name: "dev.hack()",
              imgUrl: devHackLogo,
              imgAlt: "dev.hack()"
            },
            {
              name: "dev.boost()",
              imgUrl: devBoostLogo,
              imgAlt: "dev.boost()"
            },
            {
              name: "dev.camp()",
              imgUrl: devCampLogo,
              imgAlt: "dev.camp()"
            }, 
          ]
        },
        {
          title: "Leandro Rodrigues",
          description: "",
          imgUrl: leandroRodrigues,
          imgAlt: "Foto de Leandro Rodrigues",
          imgClass: "rounded-full  h-64 w-64 ",
          linkTo: "",
          "roles": [
            {
              name: "dev.hack()",
              imgUrl: devHackLogo,
              imgAlt: "dev.hack()"
            }, 
            {
              name: "dev.camp()",
              imgUrl: devCampLogo,
              imgAlt: "dev.camp()"
            }, 
          ]
        },
        {
          title: "Leonardo Lana",
          description:"",
          imgUrl: leonardoLana,
          imgAlt: "Foto de Leonardo Lana",
          imgClass: "rounded-full  h-64 w-64 ",
          linkTo: "",
          "roles": [
            {
              name: "dev.hack()",
              imgUrl: devHackLogo,
              imgAlt: "dev.hack()"
            }, 
            {
              name: "dev.camp()",
              imgUrl: devCampLogo,
              imgAlt: "dev.camp()"
            }, 
          ]
        },
        {
          title: "Lucas Civile",
          description: "",
          imgUrl: lucasCivile,
          imgAlt: "Foto de Lucas Civile",
          imgClass: "rounded-full  h-64 w-64 ",
          linkTo: "",
          "roles": [
            {
              name: "dev.hack()",
              imgUrl: devHackLogo,
              imgAlt: "dev.hack()"
            }, 
            {
              name: "dev.camp()",
              imgUrl: devCampLogo,
              imgAlt: "dev.camp()"
            }, 
          ]
        },
        {
          title: "Renato Cordeiro",
          description:"",
          imgUrl: renatoCordeiro,
          imgAlt: "Foto de Renato Cordeiro",
          imgClass: "rounded-full  h-64 w-64 ",
          linkTo: "",
          "roles": [
            {
              name: "dev.hack()",
              imgUrl: devHackLogo,
              imgAlt: "dev.hack()"
            }, 
            {
              name: "dev.boost()",
              imgUrl: devBoostLogo,
              imgAlt: "dev.boost()"
            },
          ]
        },
        {
          title: "Ricardo Kojo",
          description:"",
          imgUrl: ricardoKojo,
          imgAlt: "Foto de Ricardo Kojo",
          imgClass: "rounded-full  h-64 w-64 ",
          linkTo: "",
          "roles": [
            {
              name: "dev.hack()",
              imgUrl: devHackLogo,
              imgAlt: "dev.hack()"
            }, 
            {
              name: "dev.camp()",
              imgUrl: devCampLogo,
              imgAlt: "dev.camp()"
            }, 
          ]
        },
        {
          title: "Victor Hugo",
          description:"",
          imgUrl: victorHugo,
          imgAlt: "Foto de Victor Hugo",
          imgClass: "rounded-full  h-64 w-64 ",
          linkTo: "",
          "roles": [
            {
              name: "dev.hack()",
              imgUrl: devHackLogo,
              imgAlt: "dev.hack()"
            }, 
            {
              name: "dev.boost()",
              imgUrl: devBoostLogo,
              imgAlt: "dev.boost()"
            },
          ]
        },
        {
          title: "Wander Souza",
          description:"",
          imgUrl: wanderSouza,
          imgAlt: "Foto de Wander Souza",
          imgClass: "rounded-full  h-64 w-64 ",
          linkTo: "",
          "roles": [
            {
              name: "dev.hack()",
              imgUrl: devHackLogo,
              imgAlt: "dev.hack()"
            }, 
            {
              name: "dev.boost()",
              imgUrl: devBoostLogo,
              imgAlt: "dev.boost()"
            },
          ]
        },
        {
          title: "Washingtom Luiz",
          description: "",
          imgUrl: washingtomLuiz,
          imgAlt: "Foto de Washingtom Luiz",
          imgClass: "rounded-full  h-64 w-64 ",
          linkTo: "",
          "roles": [
            {
              name: "dev.hack()",
              imgUrl: devHackLogo,
              imgAlt: "dev.hack()"
            }, 
            {
              name: "dev.boost()",
              imgUrl: devBoostLogo,
              imgAlt: "dev.boost()"
            },
          ]
        },
        {
          title: "Ygor tavela",
          description:"",
          imgUrl: ygorTavela,
          imgAlt: "Foto de Ygor Tavela",
          imgClass: "rounded-full  h-64 w-64 ",
          linkTo: "",
          "roles": [
            {
              name: "dev.hack()",
              imgUrl: devHackLogo,
              imgAlt: "dev.hack()"
            }, 
            {
              name: "dev.camp()",
              imgUrl: devCampLogo,
              imgAlt: "dev.camp()"
            }, 
          ]
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
