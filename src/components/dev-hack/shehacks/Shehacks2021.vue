<template>
  <div class="flex flex-col items-center mt-4 mx-5">
    <custom-transition type="fade">
      <div class="flex flex-col">
        <span class="flex font-inter font-bold uppercase pl-2">
          <img class="flex h-32" src="@/assets/dev-hack/shehacks2021.svg" >
        </span>
      </div>
    </custom-transition>
    <custom-transition type="bottom" class="mt-4">
      <Button
        link="https://evento2021.shehacks.xyz/"
        theme="shehacks2021"
        message="Visitar site Shehacks 2021"
      >
        Saiba mais
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
