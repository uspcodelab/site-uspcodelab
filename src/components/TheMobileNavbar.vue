<template>
  <nav v-scroll="handleMobileMenuScroll" class="mobile_nav">
    <button
      class="mobile_nav__button"
      :class="buttonStyle"
      role="button"
      tabindex="0"
      @click="toggle"
    >
      <font-awesome-icon
        v-if="isOpen"
        :icon="{ prefix: 'fas', iconName: 'times' }"
        size="lg"
        aria-labelledby="menuCloseBtn"
        title="Botão para fechar menu"
      />
      <font-awesome-icon
        v-else
        :icon="{ prefix: 'fas', iconName: 'bars' }"
        size="lg"
        aria-labelledby="menuOpenBtn"
        title="Botão para abrir menu"
      />
    </button>

    <ul v-scroll-lock="isOpen" class="mobile_nav__menu" :class="menuStyle">
      <router-link
        v-for="link in navLinks"
        :key="link.name"
        v-scroll-to="'#header'"
        :to="link.url"
        tag="li"
        class="mobile_nav__menu__item"
        @click="toggle"
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
      navLinks,
      isOpen: false,
      atHeader: true
    };
  },
  computed: {
    buttonStyle() {
      return [
        this.isOpen || this.atHeader
          ? "mobile_nav__button--light"
          : "mobile_nav__button--primary"
      ];
    },
    menuStyle() {
      return [
        this.isOpen ? "mobile_nav__menu--active" : "mobile_nav__menu--hidden"
      ];
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    handleMobileMenuScroll() {
      if (window.scrollY > 60) {
        if (this.atHeader == true) this.atHeader = false;
      } else {
        if (this.atHeader == false) this.atHeader = true;
      }
    }
  }
};
</script>

<style>
.mobile_nav {
  @apply w-screen;
  @apply fixed pin-b;
  @apply flex flex-col-reverse justify-start items-center;
}

.mobile_nav__button {
  transition: background-color 0.25s ease 0s;

  @apply flex-none;

  @apply w-16 h-16;
  @apply fixed pin-b;
  @apply my-8 z-50;

  @apply rounded-full;
  @apply outline-none;
}

.mobile_nav__button--light {
  @apply bg-ucl-white text-ucl-orange;
}

.mobile_nav__button--primary {
  @apply bg-ucl-orange text-ucl-white;
}

.mobile_nav__menu {
  @apply bg-ucl-orange text-ucl-white;

  @apply w-screen h-screen;
  @apply fixed pin-b;
  @apply list-reset;
  @apply py-32 z-40;

  @apply overflow-hidden;

  @apply flex flex-col justify-end;
}

.mobile_nav__menu__item {
  transition: background-color 0.3s;
  @apply text-ucl-white text-3xl text-center;
  @apply font-bold uppercase;

  @appyl w-full;
  @apply px-8 py-4;

  @apply no-underline cursor-pointer;
}

.mobile_nav__menu--active {
  transform: scale(1);
  transition: all 0.2s ease-in-out 0.2s;
  @apply opacity-100 visible;
  @apply rounded-none;
}

.mobile_nav__menu--hidden {
  transform: scale(0);
  transition: all 0.2s ease-in-out 0.2s;
  @apply opacity-0 invisible;
  @apply rounded-full;
}
</style>
