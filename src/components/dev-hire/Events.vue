<template>
  <section class="section section--light">
    <h1 class="title">
      Últimos eventos anunciados do dev.hire():
    </h1>
    <events-list :array="devLearnEvents" />
  </section>
</template>

<script>
import EventsList from "@/components/dev-hire/EventsList.vue";

import LoggiLogo from "@/assets/dev-hire/loggilogo.png";
import VtexLogo from "@/assets/dev-hire/vtexlogo.png";
import FacebookLogo from "@/assets/dev-hire/facebooklogo.png";
import GoogleLogo from "@/assets/dev-hire/googlelogo.jpg";

export default {
  components: {
    EventsList,
    LoggiLogo,
    FacebookLogo,
    GoogleLogo
  },
  data() {
    return {
      devLearnEvents: [
        {
          title: "Loggi",
          name: "Loggi",
          description:
            "Uma empresa que revolucionou a logística no Brasil, utilizando tecnologias digitais aliadas aos velhos meios de transporte",
          date:
            "23 de maio de 2019",
          imgUrl: LoggiLogo,
          imgAlt: "Logo da Loggi",
          linkTo: "",
          class: "w-64 h-64 p-5"
        },
        {
          title: "Vtex",
          name: "Vtex",
          description:
            "Vtex, uma grande empresa no setor de e-commerce estará dando uma palestra no IME falando sobre front e back-end.",
          date:
            "16 de maio de 2019",
          imgUrl: VtexLogo,
          imgAlt: "Logo da Vtex",
          linkTo: "",
          class: "w-64 h-64 py-5"
        },
        {
          title: "Facebook",
          name: "Facebook",
          description:
            "A gigantesca e famosa Facebook também fez sua tradicional palestra de recrutamento no IME em 2019! ",
          date:
            "26 de março de 2019",
          imgUrl: FacebookLogo,
          imgAlt: "Logo do Facebook",
          linkTo: "",
          class: "w-64 h-64 p-8"
        },
      ]
    };
  }
};
</script>