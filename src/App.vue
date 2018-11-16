<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
    getNavLinks() {
      return [
        { url: "/", name: "Início" },
        { url: "dev-camp", name: "dev.camp()" },
        { url: "hackathonusp", name: "HackathonUSP" }
      ];
    },
    getSocialMedias() {
      return [
        {
          url: "https://uclab.xyz/facebook",
          iconPrefix: "fab",
          iconName: "facebook"
        },
        {
          url: "https://uclab.xyz/github",
          iconPrefix: "fab",
          iconName: "github"
        },
        {
          url: "https://uclab.xyz/gitlab",
          iconPrefix: "fab",
          iconName: "gitlab"
        },
        {
          url: "https://uclab.xyz/telegram",
          iconPrefix: "fab",
          iconName: "telegram"
        },
        {
          url: "https://uclab.xyz/medium",
          iconPrefix: "fab",
          iconName: "medium"
        },
        {
          url: "mailto:codelab@ime.usp.br",
          iconPrefix: "fas",
          iconName: "envelope"
        }
      ];
    }
  }
};
</script>


<style lang="scss">
@import "assets/styles/tailwind.postcss";

html {
  font-size: 14px;
}

body {
  font-family: $font-family-base !important;
}

.page {
  color: $ucl-light;
}

@media (min-width: 992px) {
  html {
    font-size: 16px;
  }
}

@media (min-width: 1200px) {
  html {
    font-size: 1.2vmax;
  }
}

@media (min-width: 1920px) {
  html {
    font-size: 1.1vmax;
  }
}

@media (min-width: 2560px) {
  html {
    font-size: 1vmax;
  }
}
</style>
