<template>
  <footer class="footer">
    <div class="column column--spaced column--highlight">
      <!-- Logo -->
      <router-link v-scroll-to="'#header'" to="/" class="no-underline">
        <img
          src="@/assets/logos/ucl-logo-wb-alpha.svg"
          alt="Logo do USPCodeLab"
          class="logo"
        />
        <p class="tagline">
          Estimulando a inovação tecnológica na USP
        </p>
      </router-link>
    </div>

    <div class="column column--spaced column--highlight">
      <!-- Social Medias -->
      <div class="w-full">
        <p class="tagline">
          Siga-nos nas redes sociais!
        </p>
      </div>
      <div class="icon_list">
        <a v-for="sm in socialMedias" :key="sm.iconName" :href="sm.url">
          <font-awesome-icon
            :icon="{ prefix: sm.iconPrefix, iconName: sm.iconName }"
            :aria-labelledby="sm.ariaLabelledBy"
            :title="sm.iconTitle"
            class="bg-ucl-white h-12 w-12 text-ucl-black text-5xl m-1 p-2 rounded-full flex-none"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import socialMedias from "@/json/socialMedias.json";

export default {
  data() {
    return {
      socialMedias
    };
  }
};
</script>

<style>
.footer {
  @apply bg-ucl-black text-ucl-white;
  @apply text-center text-base font-semibold;

  @apply pb-24;

  @apply flex flex-row justify-center items-stretch;

  svg {
    /* Configure transition */
    width: 3rem !important;
    transition: color 0.2s;
  }
}
@screen md {
  .footer {
    @apply py-8;
  }
}

.footer--divided {
  @apply flex-wrap;
}
@screen md {
  .footer--divided {
    @apply flex-no-wrap;
  }
}

/* @screen md { */
/*   .footer { */
/*     @apply px-12 pb-8 text-xs; */
/*   } */
/* } */
/* @screen lg { */
/*   .footer { */
/*     @apply px-20; */
/*   } */
/* } */
/* @screen xl { */
/*   .footer { */
/*     @apply px-0; */
/*   } */
/* } */
</style>
