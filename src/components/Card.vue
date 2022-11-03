<template>
  <router-link v-if="data.to" v-scroll-to="'#header'" :to="data.to" class="no-underline">
    <div class="rounded overflow-hidden shadow-md text-center h-full">
      <img :src="data.imgUrl" :alt="data.imgAlt" class="w-1/2 lg:w-1/3 mt-6">
      <div class="px-6 pt-4 mb-6">
        <div class="text-ucl-black font-bold text-3xl lg:text-base mb-2">{{ data.name }}</div>
        <p class="text-grey-darker text-base lg:text-xs leading-normal" v-html="data.description" />
      </div>
    </div>
    <span class="flex justify-end items-end">
      <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'external-link-alt' }" :aria-labelledby="data.title" title="Ícone link externo" class="absolute text-grey text-3xl pb-3 pr-3"/>
    </span>
  </router-link>

  <div v-else class="rounded overflow-hidden shadow-md text-center h-full">
    <img :src="data.imgUrl" :alt="data.imgAlt" class="w-1/2 lg:w-1/3 mt-6">
    <div class="px-6 pt-4 mb-6">
      <div class="font-bold text-3xl lg:text-base mb-2">{{ data.name }}</div>
      <p class="text-grey-darker text-base lg:text-xs leading-normal" v-html="data.description" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return { name: "", description: "", imgUrl: "", imgAlt: "", to: "" };
      }
    }
  }
};
</script>
