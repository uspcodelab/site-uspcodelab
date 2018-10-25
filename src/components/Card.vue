<template>
  <div class="rounded overflow-hidden shadow-md text-center h-full">
    <img :src="data.imgUrl" :alt="data.imgAlt" class="w-1/2 lg:w-1/3 mt-4">
    <div class="px-6 py-4">
      <div class="font-bold text-3xl lg:text-base mb-2">{{ data.name }}</div>
      <p class="text-grey-darker text-base lg:text-xs">
        {{ data.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return { name: "", description: "", imgURL: "", imgAlt: "" };
      }
    },
    img: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>
