<template>
  <div class="flex flex-col items-center relative">
    <div v-for="data in array" :key="data.name">
      <journey-section :data="data" />
    </div>
  </div>
</template>

<script>
import JourneySection from "@/components/dev-journey/JourneySection";

export default {
  components: {
    JourneySection,
  },
  props: {
    array: {
      type: Array,
      default: function () {
        return [];
      },
    },
    full: {
      type: Boolean,
      default: function () {
        return false;
      },
    },
  },
};
</script>
