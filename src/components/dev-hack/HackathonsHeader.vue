<template>
  <div
    class="flex flex-wrap container md:pt-12 mb-4 md:mb-0 mx-auto px-4 md:px-4 leading-loose"
  >
    <div>
      <custom-transition type="fade">
        <h1 class="pb-4 text-center">Essa é a nossa Essência.</h1>
      </custom-transition>
      <custom-transition type="fade">
        <p class="lg:text-xs mb-8 text-left text-grey-darker">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Purus in massa
        tempor nec feugiat nisl pretium fusce id. Sapien eget mi proin sed
        libero enim. Urna nunc id cursus metus aliquam eleifend mi in. Mauris
        pellentesque pulvinar pellentesque habitant morbi tristique senectus et
        netus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
        Ultrices eros in cursus turpis massa tincidunt. Iaculis at erat
        pellentesque adipiscing commodo elit at imperdiet dui. Facilisis
        volutpat est velit egestas dui id ornare arcu. Nunc mi ipsum faucibus
        vitae aliquet nec ullamcorper sit. Aliquet nec ullamcorper sit amet
        risus nullam eget felis eget. Adipiscing commodo elit at imperdiet dui
        accumsan sit amet nulla. Feugiat in ante metus dictum at tempor commodo
        ullamcorper a. Ac felis donec et odio pellentesque diam volutpat
        commodo. Nunc faucibus a pellentesque sit amet porttitor eget .
        </p>
      </custom-transition>
    </div>
    <div
      class="hidden md:flex flex-wrap flex-col md:flex-row justify-between items-center md:mt-5"
    >

      <div class="w-1/2 md:w-1/4">
        <div
          v-scroll-to="'#' + hackathons.Interhack.title"
          :alt="hackathons.Hackfools.alt"
          class="cursor-pointer"
        >
          <interhack class="logo-hack" />
        </div>
      </div>

      <div class="w-1/2 md:w-1/4">
        <div
          v-scroll-to="'#' + hackathons.Shehacks.title"
          :alt="hackathons.Shehacks.alt"
          class="cursor-pointer"
        >
          <shehacks class="logo-hack" />
        </div>
      </div>

      <div class="w-1/2 md:w-1/4 mb-10 md:mb-0">
        <div
          v-scroll-to="'#' + hackathons.Hackfools.title"
          :alt="hackathons.Interhack.alt"
          class="cursor-pointer"
        >
          <hackfools class="logo-hack" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import HackfoolsHeader from "./hackfools/HackfoolsHeader.vue";

import Hackfools from "./hackfools/HackfoolsLogo";
import Shehacks from "./shehacks/ShehacksLogo";
import Interhack from "./interhack/InterhackLogo";

export default {
  components: {
    HackfoolsHeader,
    Hackfools,
    Shehacks,
    Interhack,
  },
  data() {
    return {
      hackathons: {
        Hackfools: {
          src: Hackfools,
          title: "hackfools",
          alt: "Logo Hackfools",
        },
        Shehacks: {
          src: Shehacks,
          title: "shehacks",
          alt: "Logo Shehacks",
        },
        Interhack: {
          src: Interhack,
          title: "interhack",
          alt: "Logo Interhack",
        },
      },
    };
  },
};
</script>

<style scoped>
.logo-hack {
  transition: ease-out 0.1s;
}

.logo-hack:hover {
  transform: scale(1.02);
}
</style>
