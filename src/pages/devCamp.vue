<template>
  <div class="page">
    <the-navbar v-if="!this.$parent.isMobile()" :links="this.$parent.getNavLinks()"/>
    <mobile-menu v-else :links="this.$parent.getNavLinks()"/>
    <main>
      <h1>dev.camp()</h1>
    </main>
    <the-footer :social-medias="this.$parent.getSocialMedias()"/>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  metaInfo: {
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
  },
  components: {
    MobileMenu,
    TheNavbar,
    TheFooter
  }
};
</script>
