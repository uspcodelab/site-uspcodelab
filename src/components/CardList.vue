<template>
  <div class="flex flex-wrap md:-mx-4 lg:px-32 pb-2">
    <div v-for="data in array" :key="data.name" class="w-full md:w-1/2 md:px-4 lg:w-1/3 my-3">
      <Card :data="data" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  components: {
    Card
  },
  props: {
    array: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
