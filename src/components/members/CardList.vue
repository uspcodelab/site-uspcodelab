<template>
  <div class="card_list">
    <div v-for="info in array" :key="info.name" class="card_wrapper">
      <card :data="info" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/members/Card";

export default {
  components: {
    Card
  },
  props: {
    array: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style>
.card_list {
  @apply flex flex-wrap;
}

.card_wrapper {
  @apply my-2;
  @apply w-full;
}
@screen md {
  .card_wrapper {
    @apply w-1/2 px-2;
  }
}
@screen lg {
  .card_wrapper {
    @apply w-1/3;
  }
}
</style>
