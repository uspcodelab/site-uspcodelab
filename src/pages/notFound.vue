<template>
  <div class="page">
    <the-navbar v-if="!this.$parent.isMobile()" :links="this.$parent.getNavLinks()"/>
    <mobile-menu v-else :links="this.$parent.getNavLinks()"/>
    <main>
      <h1>404 Not Found</h1>
    </main>
    <the-footer :social-medias="this.$parent.getSocialMedias()"/>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    MobileMenu,
    TheNavbar,
    TheFooter
  }
};
</script>
