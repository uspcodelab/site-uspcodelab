<template>
  <div>
    <div v-for="info in array" :key="info.name" class="flex flex-row border border-black p-2 m-2">
        <img :src="info.imgUrl" :class="info.class"/>
        <div class="flex flex-col border-black">
            <p class="text-3xl ">{{ info.name }}</p>
            <p class="py-8">{{ info.description }}</p>
            <p>{{ info.date }}</p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
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
