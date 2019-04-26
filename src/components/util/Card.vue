<template>
  <div class="card card--light">
    <a
      v-if="data.imgHref"
      v-scroll-to="'#header'"
      :href="data.imgHref"
      class="card__link"
    >
      <img
        :src="data.imgUrl"
        :alt="data.imgAlt"
        class="card__link__image"
        :class="data.imgClass"
      />
      <font-awesome-icon
        :icon="{ prefix: 'fas', iconName: 'external-link-alt' }"
        :aria-labelledby="data.title"
        title="Ícone link externo"
        class="card__link__icon"
      />
    </a>
    <img v-else :src="data.imgUrl" :alt="data.imgAlt" :class="data.imgClass" />

    <div class="card__content">
      <div class="card__title">{{ data.title }}</div>
      <p class="card__description" v-html="data.description" />
      <div class="flex flex-wrap justify-center items-center">
        <span
          v-for="(label, key, index) in data.labels"
          :key="index"
          class="card__label"
          :class="[customClass(label.name)]"
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

    <router-link
      v-if="data.linkTo"
      v-scroll-to="'#header'"
      :to="data.linkTo"
      class="card__link"
    >
      <font-awesome-icon
        :icon="{ prefix: 'fas', iconName: 'external-link-alt' }"
        :aria-labelledby="data.title"
        title="Ícone link externo"
        class="card__link__icon"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          title: "",
          description: "",
          imgHref: "",
          imgUrl: "",
          imgAlt: "",
          imgClass: "",
          linkTo: "",
          labels: []
        };
      }
    }
  },
  methods: {
    customClass(className) {
      return className.toLowerCase();
    }
  }
};
</script>

<style>
.card {
  @apply overflow-hidden text-center;
  @apply w-full h-full;
  @apply rounded;
  @apply shadow-md;
  @apply flex flex-col;
}

.card--light {
  @apply bg-ucl-white;
  @apply text-ucl-black;
}
.card--dark {
  @apply bg-ucl-black;
  @apply text-ucl-white;
}

.card__content {
  @apply flex-grow;
  @apply px-8 my-6;
}
@screen md {
  .card__content {
    @apply px-12 my-6;
  }
}

.card__title {
  @apply text-ucl-black;
  @apply text-3xl;
  @apply font-bold;
  @apply w-full;
  @apply pb-4;
}

.card__description {
  @apply text-grey-darker;
  @apply text-base;
  @apply leading-normal;
  @apply pb-4;
}

.card__link {
  @apply no-underline flex justify-end items-end;
}

.card__link__image {
  object-fit: cover;
}

.card__link__icon {
  @apply absolute text-grey text-3xl pb-3 pr-3;
}

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
