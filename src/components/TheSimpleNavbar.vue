<template>
  <nav class="simple_nav">
    <div v-scroll-to="'#header'" class="simple_nav__logo">
      <img
        src="@/assets/logos/ucl-logo-colored-alpha.svg"
        alt="USPCodeLab"
        class="h-10"
      />
    </div>

    <ul class="simple_nav__menu">
      <router-link
        v-for="link in navLinks"
        :key="link.name"
        v-scroll-to="'#header'"
        :to="link.url"
        tag="li"
        class="simple_nav__menu__item"
      >
        {{ link.name }}
      </router-link>
    </ul>
  </nav>
</template>

<script>
import navLinks from "@/json/navLinks.json";

export default {
  data() {
    return {
      navLinks
    };
  }
};
</script>

<style>
.simple_nav {
  @apply bg-ucl-white;

  @apply w-screen;
  @apply fixed pin-t;
  @apply px-3 py-2;
  @apply shadow-md;

  @apply flex flex-row flex-wrap items-center justify-start;
}

.simple_nav__logo {
  @apply flex items-center flex-no-shrink mr-4 cursor-pointer;
}

.simple_nav__menu {
  @apply text-base;
  @apply list-reset;
  @apply flex flex-row flex-wrap items-center justify-start;
}

.simple_nav__menu__item {
  @apply text-grey-dark;
  @apply cursor-pointer select-none no-underline mr-4;
}
.simple_nav__menu__item:hover {
  @apply text-grey-darkest;
}
</style>
