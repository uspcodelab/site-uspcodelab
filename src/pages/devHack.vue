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
        <hackathons-header />
        <interhack />
        <shehacks />
        <hackfools />
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

import HackathonsHeader from "@/components/dev-hack/HackathonsHeader";

import Hackfools from "@/components/dev-hack/hackfools/Hackfools";
import Shehacks from "@/components/dev-hack/shehacks/Shehacks";
import Interhack from "@/components/dev-hack/interhack/Interhack";

export default {
  metaInfo: {
    title:
      "dev.hack () | USPCodeLab - Estimulando a inovação tecnológica na USP!",
    meta: [
      {
        name: "description",
        content: `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
      },
      {
        name: "keywords",
        content:
          "dev hack, dev.hack, dev.hack(), USPCodeLab, USPCodeLabs, CodeLab, CodeLabs, dev journey",
      },
    ],
  },
  components: {
    TheProjectsHeader,
    TheDivision,
    HackathonsHeader,
    Hackfools,
    Shehacks,
    Interhack,
    MobileMenu,
    TheNavbar,
    TheFooter,
  },
  data() {
    return {
      title: this.$parent.isMobile() ? "Dev .hack( )" : "Dev.hack( )",
    };
  },
  computed: {},
};
</script>

<style scoped lang="scss">
#headers-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
