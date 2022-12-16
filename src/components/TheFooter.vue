<template>
  <footer id="footer"
    class="footer bg-ucl-black text-ucl-white px-8 md:px-12 lg:px-20 xl:px-0 pt-8 pb-mobile md:pb-8 flex flex-wrap font-semibold text-base md:text-xs">
    <div class="container mx-auto flex flex-wrap">
      <!-- Logo -->
      <div class="w-full md:w-1/2 text-center pb-3">
        <router-link v-scroll-to="'#header'" to="/" class="flex flex-col items-center no-underline">
          <img src="@/assets/logos/ucl-logo-wb-alpha.svg" alt="Logo do USPCodeLab" class="h-16">
          <p class="text-ucl-white select-none leading-normal mb-4">
            Estimulando a inovação tecnológica na USP
          </p>
        </router-link>
      </div>
      <!-- Social Medias -->
      <div class="text-center no-underline w-full md:w-1/2">
        <div class="w-full">
          <p class="leading-normal mb-4">
            Siga-nos nas redes sociais!
          </p>
        </div>
        <div class="flex flex-wrap align-center justify-center">
          <a v-for="sm in socialMedias" :key="sm.iconName" :href="sm.url">
            <font-awesome-icon :icon="{ prefix: sm.iconPrefix, iconName: sm.iconName }"
              :aria-labelledby="sm.ariaLabelledBy" :title="sm.iconTitle"
              class="bg-ucl-white h-12 w-12 text-ucl-black text-5xl m-1 p-2 rounded-full" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    socialMedias: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>


<style lang="scss">
.footer {
  svg {
    /* Configure transition */
    width: 3rem !important;
    transition: color 0.2s;
  }
}
</style>
