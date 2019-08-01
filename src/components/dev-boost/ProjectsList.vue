<template>
  <div>
    <div v-for="info in array" :key="info.name" class="flex flex-row border border-black p-2 m-2">
        <img :src="info.imgUrl" :class="info.class"/>
        <div class="flex flex-col border-black">
            <p class="text-3xl ">{{ info.name }}</p>
            <p class="py-8">{{ info.description }}</p>
            <a class="py-8" :href="info.repository"> Repositório </a>
            
            <div class="flex flex-wrap justify-center items-center">
                <span
                v-for="(label, key, index) in info.labels"
                :key="index"
                class="card__label"
                >
                    <font-awesome-icon
                        v-if="label.iconName"
                        :icon="{ prefix: label.iconPrefix, iconName: label.iconName }"
                        :aria-labelledby="label.ariaLabelledBy"
                        :title="label.iconTitle"
                    />
                    {{ label.name }}
                </span>
            </div>
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

<style>
.card__label {
  @apply bg-grey-lighter;
  @apply text-grey-darker;
  @apply text-sm font-semibold;
  @apply m-1;
  @apply px-3 py-1;
  @apply border-2 rounded-full;
  @apply select-none cursor-default;
}
</style>
