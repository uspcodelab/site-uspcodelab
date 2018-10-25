<template>
  <nav class="nav fixed pin-t w-screen flex flex-row flex-wrap items-center justify-start px-3 py-2">
    <div v-scroll-to="'#header'" class="flex items-center flex-no-shrink mr-4 cursor-pointer">
      <img src="@/assets/logos/ucl-logo-colored-alpha.svg" alt="USPCodeLab" class="h-10">
    </div>
    <router-link v-for="link in links" :to="link.url" :key="link.name" tag="div" class="mr-2">
      <a class="text-grey-dark hover:text-grey-darkest text-xs no-underline select-none mr-4 ">
        {{ link.name }}
      </a>
    </router-link>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss">
.nav {
  background-color: $ucl-light;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  min-height: 4rem;
  z-index: 10;
}
</style>
