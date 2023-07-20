<template>
  <div class="page">
    <the-navbar
      v-if="!this.$parent.isMobile()"
      :links="this.$parent.getNavLinks()"
    />
    <mobile-menu v-else :links="this.$parent.getNavLinks()" />
    <main class="bg-ucl-white text-ucl-black">
      <the-projects-header :title="title" />
        <div id="body">
          <learn-header />
          <webdev />
          <codelab-bits />
        </div>
    </main>
    <the-footer :social-medias="this.$parent.getSocialMedias()" />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import TheFooter from "@/components/TheFooter.vue";

import TheProjectsHeader from "@/components/TheProjectsHeader";

import LearnHeader from "@/components/dev-learn/LearnHeader";
import Webdev from "@/components/dev-learn/Webdev";
import CodelabBits from "@/components/dev-learn/CodelabBits";

export default {
  metaInfo: {
    title:
      "dev.learn() | UCL Butantã",
    meta: [
      {
        name: "description",
        content: `Cursos sobre tecnologia onde os participantes são introduzidos a ferramentas e técnicas de desenvolvimento introdutórias e avançadas.`,
      },
      {
        name: "keywords",
        content:
          "dev learn, dev.learn, dev.learn(), USPCodeLab, USPCodeLabs, CodeLab, CodeLabs, dev journey",
      },
    ],
  },
  components: {
    TheProjectsHeader,
    LearnHeader,
    CodelabBits,
    Webdev,
    MobileMenu,
    TheNavbar,
    TheFooter,
  },
  data() {
    return {
      title: this.$parent.isMobile() ? "Dev .learn( )" : "Dev.learn( )",
    };
  },
  computed: {},
};
</script>
