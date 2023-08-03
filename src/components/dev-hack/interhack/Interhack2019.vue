<template>
  <div class="flex flex-col items-center mx-4">
    <custom-transition type="fade">
      <div class="flex flex-col">
        <span class="flex font-inter font-bold uppercase pl-2 -mt-20 -mb-10">
          <img class="flex" src="@/assets/dev-hack/Interhack.svg" />
        </span>
      </div>
    </custom-transition>
    <p class="text-grey-darker">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor
      nec feugiat nisl pretium fusce id. Sapien eget mi proin sed libero enim.
      Urna nunc id cursus metus aliquam eleifend mi in. Mauris pellentesque
      pulvinar pellentesque habitant morbi tristique senectus et netus. Volutpat
      consequat mauris nunc congue nisi vitae suscipit tellus. Ultrices eros in
      cursus turpis massa tincidunt. Iaculis at erat pellentesque adipiscing
      commodo elit at imperdiet dui. Facilisis volutpat est velit egestas dui id
      ornare arcu.
    </p>
    <custom-transition type="bottom" class="mt-8 flex justify-between">
      <Button
        link="https://interhack.xyz/2019/"
        theme="interhack"
        message="Visitar site Interhack 2019"
        class="mx-2"
      >
        Site de divulgação
      </Button>
      <Button
        link="https://www.instagram.com/p/B4qNCJUhsoZ/"
        theme="interhack"
        message="Visitar instagram Interhack 2019"
        class="mx-2"
      >
        Imagens
      </Button>
    </custom-transition>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  components: {
    Button,
  },
};
</script>
