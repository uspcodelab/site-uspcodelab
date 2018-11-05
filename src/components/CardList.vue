<template>
  <div class="flex flex-wrap md:-mx-2 lg:px-32 pb-2">
    <div v-for="data in array" :key="data.name" class="w-full md:w-1/2 md:px-2 lg:w-1/3 my-2">
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
