<template>
  <footer id="footer" class="footer px-3 pt-8 p-footer md:pb-8 flex flex-wrap font-semibold text-base md:text-xs">
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
          <font-awesome-icon :icon="{ prefix: sm.iconPrefix, iconName: sm.iconName }"/>
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
  color: $ucl-light;
  background-color: $ucl-black;

  svg {
    font-size: 3rem !important;
    margin: 0.2rem;
    padding: 0.5rem;

    /* Make the icon inside a circle*/
    height: 3rem;
    width: 3rem !important;
    border-radius: 50%;

    /* Display icon */
    color: #182c39;
    background-color: white;

    /* Centralize icon in the circle */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Configure transition */
    transition: color 0.2s;
  }

  .fa-envelope:hover {
    color: #00aced;
  }
  .fa-envelope:focus {
    color: #00aced;
  }

  .fa-facebook:hover {
    color: #2b55ff;
  }
  .fa-facebook:focus {
    color: #2b55ff;
  }

  .fa-telegram:hover {
    color: #1f95d3;
  }
  .fa-telegram:focus {
    color: #1f95d3;
  }

  .fa-gitlab:hover {
    color: #e24329;
  }
  .fa-gitlab:focus {
    color: #e24329;
  }

  .fa-medium:hover {
    color: #02b875;
  }
  .fa-medium:focus {
    color: #02b875;
  }

  .fa-github:hover {
    color: #bfbfbf;
  }
  .fa-github:focus {
    color: #bfbfbf;
  }
}
</style>
