<template>
  <div class="page">
    <the-navbar v-if="!isMobile()" :links="getNavLinks()"/>
    <mobile-menu v-else :links="getNavLinks()"/>
    <main>
      <dev-camp-header/>
      <last-dev-camp :data="getLastDevCampData()"/>
      <previous-dev-camps :data="getPreviousDevCampData()"/>
    </main>
    <the-footer :social-medias="getSocialMedias()"/>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

import TheNavbar from "@/components/TheNavbar.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import TheFooter from "@/components/TheFooter.vue";

import DevCampHeader from "@/components/dev-camp/DevCampHeader.vue";
import LastDevCamp from "@/components/dev-camp/LastDevCamp.vue";
import PreviousDevCamps from "@/components/dev-camp/PreviousDevCamps.vue";

import lastDevCampData from "@/json/lastDevCampData.json";
import previousDevCampData from "@/json/previousDevCampData.json";

export default {
  components: {
    DevCampHeader,
    LastDevCamp,
    PreviousDevCamps,
    MobileMenu,
    TheNavbar,
    TheFooter
  },
  props: ["isMobile", "getNavLinks", "getSocialMedias"],
  setup() {
    useMeta({
      title:
      "dev.camp() | USPCodeLab - Estimulando a inovação tecnológica na USP!",
      meta: [
        {
          name: "description",
          content:
            "O dev.camp() é uma das partes do dev.journey(), oferecido pelo USPCodeLab. " +
            "Consiste numa escola de férias que serve de formatura para os alunos do " +
            "dev.learn() e dev.boost(), envolvendo um projeto grande com múltiplos times mistos."
        },
        {
          name: "keywords",
          content:
            "dev camp, dev.camp, dev.camp(), USPCodeLab, USPCodeLabs, CodeLab, CodeLabs, dev journey"
        }
      ]
      });
  },
  methods: {
    getLastDevCampData() {
      return lastDevCampData;
    },
    getPreviousDevCampData() {
      return previousDevCampData;
    }
  }
};
</script>
