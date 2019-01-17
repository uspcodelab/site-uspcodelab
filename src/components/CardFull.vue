<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <a :href="data.gallery_url">
      <span class="flex justify-end">
        <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'external-link-alt' }" :aria-labelledby="data.title" title="Ícone link externo" class="absolute text-ucl-white focus:text-ucl-white active:text-ucl-white mt-1 pr-1" />
      </span>
      <img :src="data.photo_url" :alt="data.photo_alt" class="w-full">
    </a>
    <div class="px-6 py-4">
      <h2 class="font-bold text-3xl lg:text-base text-center mb-2">{{ data.title }}</h2>
      <p class="text-grey-darker text-base lg:text-xs text-center" v-html="data.summary"/>
    </div>
    <div class="px-6 py-4">
      <span v-for="(tech, key, index) in data.technologies" :key="index" class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-base lg:text-xs font-semibold text-grey-darker mr-1 mb-1 cursor-default">
        #{{ tech.name }} <font-awesome-icon v-if="tech.iconName" :icon="{ prefix: tech.iconPrefix, iconName: tech.iconName }" :aria-labelledby="tech.ariaLabelledBy" :title="tech.iconTitle"/>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: function() {
        return {
          title: "",
          description: "",
          summary: "",
          gallery_url: "",
          photo_url: "",
          photo_alt: "",
          technologies: []
        };
      }
    }
  }
};
</script>
