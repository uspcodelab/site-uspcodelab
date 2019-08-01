<template>
  <section class="section section--light">
    <h1 class="title">
      Últimos projetos desenvolvidos pelo dev.boost():
    </h1>
    <projects-list :array="devBoostProjects" />
  </section>
</template>

<script>
import ProjectsList from "@/components/dev-boost/ProjectsList.vue";

import PandoraLogo from "@/assets/dev-boost/pandora_logo.svg";
import IrisLogo from "@/assets/dev-boost/iris_logo.jpg";

export default {
  components: {
    ProjectsList,
    PandoraLogo,
    IrisLogo,
  },
  data() {
    return {
      devBoostProjects: [
        {
          title: "Pandora",
          name: "Pandora",
          description:
            "Sistema web para gerenciar aluguel de armários do CAMat. Contando com sistema para acesso, controle do uso e sorteio pelo administrador, visa terminar com a necesidade de cadastros em papel físico e aumentar a transparência do sistema.",
          repository: "https://gitlab.com/uspcodelab/projects/pandora",
          labels: [
          {
            "name": "Ruby",
            "iconPrefix": "",
            "iconName": "",
            "ariaLabelledBy": "",
            "iconTitle": ""
          },
          {
            "name": "Rails",
            "iconPrefix": "",
            "iconName": "",
            "ariaLabelledBy": "",
            "iconTitle": ""
          },
          {
            "name": "VueJS",
            "iconPrefix": "fab",
            "iconName": "vuejs",
            "ariaLabelledBy": "techVueJS",
            "iconTitle": "Logo VueJS"
          },
          {
            "name": "Nuxt",
            "iconPrefix": "",
            "iconName": "",
            "ariaLabelledBy": "",
            "iconTitle": ""
          }],
          imgUrl: PandoraLogo,
          imgAlt: "Logo da Pandora",
          linkTo: "",
          class: "w-64 h-64 p-5"
        },
        {
          title: "Iris",
          name: "Iris",
          description:
            "Uma plataforma para cadastrar e disponibilizar dados sobre equipamentos de laboratórios da USP, facilitando seu possível intercâmbio. Repositório: https://gitlab.com/uspcodelab/projects/iris",
          repository: "https://gitlab.com/uspcodelab/projects/iris",
          labels: [
          {
            "name": "Ruby",
            "iconPrefix": "",
            "iconName": "",
            "ariaLabelledBy": "",
            "iconTitle": ""
          },
          {
            "name": "Rails",
            "iconPrefix": "",
            "iconName": "",
            "ariaLabelledBy": "",
            "iconTitle": ""
          },
          {
            "name": "VueJS",
            "iconPrefix": "fab",
            "iconName": "vuejs",
            "ariaLabelledBy": "techVueJS",
            "iconTitle": "Logo VueJS"
          },
          {
            "name": "Nuxt",
            "iconPrefix": "",
            "iconName": "",
            "ariaLabelledBy": "",
            "iconTitle": ""
          }],
          imgUrl: IrisLogo,
          imgAlt: "Logo da Iris",
          linkTo: "",
          class: "w-64 h-64 py-5"
        },
      ]
    };
  }
};
</script>