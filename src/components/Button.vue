<template>
  <a v-if="isOuterUrl" :href="link" target="_blank">
    <button :class="themeClass">
      <slot />
    </button>
  </a>
  <router-link v-scroll-to="'#header'" v-else :to="link">
    <button :class="themeClass" @click="onClickFunction">
      <slot />
    </button>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      default: "default",
    },
    onClickFunction: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      themes: {
        baseClass: "text-base font-semibold py-2 px-6 rounded shadow-md",
        default: "bg-ucl-orange hover:bg-ucl-orange-dark text-ucl-white",
        transparent:
          "bg-transparent hover:bg-ucl-orange text-ucl-orange hover:text-ucl-white border border-ucl-orange hover:border-transparent",
        interhack:
          "shadow-none text-inter-red border-2 border-inter-red bg-transparent hover:bg-inter-red hover:text-ucl-white",
        shehacks2022: "text-ucl-grey bg-sh-pink-light hover:bg-sh-pink-dark",
        shehacks2021: "text-ucl-white bg-sh-green hover:bg-sh-green-dark",
        hackfools2023: "bg-purple-dark hover:bg-purple text-ucl-white",
        Youtube:
          "shadow-none text-inter-red border-2 border-inter-red bg-transparent hover:bg-inter-red hover:text-ucl-white",
        Instagram:
          "shadow-none text-instagram border-2 border-instagram bg-transparent hover:bg-instagram hover:text-ucl-white",
      },
    };
  },
  computed: {
    isOuterUrl() {
      return !this.link ? false : this.link.startsWith("http");
    },
    themeClass() {
      const selectedTheme = this.themes[this.theme] || this.themes["default"];
      return this.themes["baseClass"] + " " + selectedTheme;
    },
  },
};
</script>
