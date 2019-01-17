<template>
  <footer id="footer" class="footer bg-ucl-black text-ucl-white px-3 pt-8 pb-mobile md:pb-8 flex flex-wrap font-semibold text-base md:text-xs">
    <!-- Logo -->
    <div class="w-full md:w-1/2 text-center pb-3">
      <img src="@/assets/logos/ucl-logo-wb-alpha.svg" alt="Logo do USPCodeLab" class="h-16">
      <p class="select-none leading-normal mb-4">
        Estimulando a inovação tecnológica na USP
      </p>
    </div>
    <!-- Social Medias -->
    <div class="text-center no-underline w-full md:w-1/2">
      <div class="w-full">
        <p class="leading-normal mb-4">
          Encontre-nos nas redes sociais!
        </p>
      </div>
      <div class="flex flex-wrap align-center justify-center">
        <a v-for="sm in socialMedias" :key="sm.iconName" :href="sm.url">
          <font-awesome-icon :icon="{ prefix: sm.iconPrefix, iconName: sm.iconName }" :aria-labelledby="sm.ariaLabelledBy" :title="sm.iconTitle" class="bg-ucl-white h-12 w-12 text-ucl-black text-5xl m-1 p-2 rounded-full"/>
        </a>
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
    transition: color 0.2s;
  }

  .fa-envelope:hover {
    color: #00aced !important;
  }
  .fa-envelope:focus {
    color: #00aced !important;
  }

  .fa-facebook:hover {
    color: #2b55ff !important;
  }
  .fa-facebook:focus {
    color: #2b55ff !important;
  }

  .fa-telegram:hover {
    color: #1f95d3 !important;
  }
  .fa-telegram:focus {
    color: #1f95d3 !important;
  }

  .fa-gitlab:hover {
    color: #e24329 !important;
  }
  .fa-gitlab:focus {
    color: #e24329 !important;
  }

  .fa-medium:hover {
    color: #02b875 !important;
  }
  .fa-medium:focus {
    color: #02b875 !important;
  }

  .fa-github:hover {
    color: #bfbfbf !important;
  }
  .fa-github:focus {
    color: #bfbfbf !important;
  }
}
</style>
