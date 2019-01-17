<template>
  <div class="flex flex-wrap md:-mx-2 pb-2">
    <div v-for="data in array" :key="data.name" class="w-full md:w-1/2 md:px-2 lg:w-1/3 my-2">
      <card v-if="!full" :data="data" />
      <card-full v-else :data="data" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import CardFull from "@/components/CardFull";

export default {
  components: {
    Card,
    CardFull
  },
  props: {
    array: {
      type: Array,
      default: function() {
        return [];
      }
    },
    full: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  }
};
</script>
