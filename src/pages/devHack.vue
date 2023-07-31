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

import HackathonsHeader from "@/components/dev-hack/HackathonsHeader";

import Hackfools from "@/components/dev-hack/hackfools/Hackfools";
import Shehacks from "@/components/dev-hack/shehacks/Shehacks";
import Interhack from "@/components/dev-hack/interhack/Interhack";

export default {
  metaInfo: {
    title: "dev.hack() | UCL Butantã",
    meta: [
      {
        name: "description",
        content: `Hackathons onde os participantes são desafiados a buscar, num tempo limitado, soluções inovadoras para problemas reais utilizando tecnologia.`,
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
};
</script>
