<template>
  <!-- <div class="flex flex-col md:-mx-2 mt-16"> -->
  <div class="flex flex-col items-center relative">
    <div v-for="data in array" :key="data.name">
      <!-- <dir class="bg-green">ola como vai</dir> -->
      <journey-section  :data="data"/>
    </div>
  <!-- </div> -->
  </div>
</template>

<script>
import Card from "@/components/Card";
import CardFull from "@/components/CardFull";
import JourneySection from "@/components/JourneySection";


export default {
  components: {
    Card,
    CardFull,
    JourneySection
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
