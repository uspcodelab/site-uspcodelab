<template>
  <section class="text-ucl-black px-8 md:px-12 lg:px-20 xl:px-0 pt-10 md:pt-32 md:pb-20">
    <div class="container mx-auto flex flex-wrap flex-row-reverse">
      <div type="fade" class="w-full md:w-1/2 flex items-end md:items-center justify-center pb-8 md:pb-4">
        <dev-learn class="max-h-half-screen max-w-2/3"/>
      </div>
      <custom-transition type="fade" class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center">
        <h1 class="text-ucl-orange text-3xl font-thin tracking-wide pb-4">
          Comece por aqui :)
        </h1>
        <p class="lg:text-xs text-grey-darker leading-loose mb-6 md:mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Purus in massa
          tempor nec feugiat nisl pretium fusce id. Sapien eget mi proin sed
          libero enim. Urna nunc id cursus metus aliquam eleifend mi in. Mauris
          pellentesque pulvinar pellentesque habitant morbi tristique senectus et
          netus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
        </p>
      </custom-transition>
    </div>
  </section>
</template>
<script>

import DevLearn from "./DevLearnIcon.vue";

export default {
  components: {
    DevLearn,
  },
};
</script>
