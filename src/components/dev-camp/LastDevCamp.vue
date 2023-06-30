<template>
  <section
    id="last-dev-camp"
    class="last-dev-camp bg-ucl-black text-ucl-white px-8 md:px-12 lg:px-20 xl:px-0 py-20 text-center"
  >
    <div class="container mx-auto flex flex-wrap flex-row">
      <div
        class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center px-2"
      >
        <h1 class="text-ucl-orange text-3xl font-thin tracking-wide pb-4">
          {{ data.title }}
        </h1>
        <p
          class="lg:text-xs text-justify leading-normal pb-4"
          v-html="data.description"
        />
        <div class="flex flex-wrap align-center justify-center">
          <font-awesome-icon
            v-for="icon in data.technologies"
            :key="icon.iconName"
            :icon="{ prefix: icon.iconPrefix, iconName: icon.iconName }"
            :aria-labelledby="icon.ariaLabelledBy"
            :title="icon.iconTitle"
            class="hover:text-ucl-orange h-12 w-12 text-5xl m-1 p-2"
          />
        </div>
      </div>
      <div
        class="w-full md:w-1/2 flex items-end md:items-center justify-center px-2"
      >
        <img :src="data.photo_url" :alt="data.photo_alt" class="rounded-sm" >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return { title: "", description: "", icons: [] };
      },
    },
  },
};
</script>

<style lang="scss">
.last-dev-camp {
  svg {
    width: 3rem !important;
    transition: color 0.2s;
  }
}
</style>
