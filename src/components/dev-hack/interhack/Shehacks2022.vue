<template>
  <div class="flex flex-col items-center">
    <custom-transition type="fade">
      <div class="flex flex-col">
        <span class="font-inter text-header text-sh-pink-dark self-start -mb-10"
          >She</span
        >
        <span class="flex font-inter font-bold uppercase pl-2">
          <img class="flex h-16" src="@/assets/dev-hack/shehacks2022.svg" />
          <span
            class="text-sh-pink-dark font-semibold text-4xl self-end pt-3 pl-3"
          >
            2022
          </span>
        </span>
      </div>
    </custom-transition>
    <custom-transition type="bottom" class="mt-4">
      <Button
        link="https://shehacks.xyz/"
        theme="shehacks2022"
        message="Visitar site Shehacks 2022"
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
