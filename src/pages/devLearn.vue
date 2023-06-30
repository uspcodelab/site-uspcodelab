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
import TheDivision from "@/components/TheDivision";

import LearnHeader from "@/components/dev-learn/LearnHeader";
import Webdev from "@/components/dev-learn/Webdev";
import CodelabBits from "@/components/dev-learn/CodelabBits";

export default {
  metaInfo: {
    title:
      "dev.learn() | USPCodeLab - Estimulando a inovação tecnológica na USP!",
    meta: [
      {
        name: "description",
        content: `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
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
