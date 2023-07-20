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
          <history />
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

import History from "@/components/about/history";

export default {
  metaInfo: {
    title:
      "Sobre nós | UCL Butantã",
    meta: [
      {
        name: "description",
        content: `História do USPCodelab`,
      },
      {
        name: "keywords",
        content:
          "Sobre nós, Sobre Codelab, História Codelab",
      },
    ],
  },
  components: {
    TheProjectsHeader,
    History,
    MobileMenu,
    TheNavbar,
    TheFooter,
  },
  data() {
    return {
      title: "Sobre nós",
    };
  },
  computed: {},
};
</script>
