<template>
  <section class="section section--dark section--divided">
    <div class="column column--info">
      <h1 class="title">
        {{ lastDevCamp.title }}
      </h1>
      <p class="description description--long" v-html="lastDevCamp.summary" />
      <ul class="icon_list">
        <li v-for="label in lastDevCamp.labels" :key="label.iconName">
          <font-awesome-icon
            :icon="{ prefix: label.iconPrefix, iconName: label.iconName }"
            :aria-labelledby="label.ariaLabelledBy"
            :title="label.iconTitle"
            class="icon"
          />
        </li>
      </ul>
    </div>
    <div class="divider" />
    <div class="column column--photo">
      <img
        :src="lastDevCamp.imgUrl"
        :alt="lastDevCamp.imgAlt"
        class="rounded-sm"
      />
    </div>
  </section>
</template>

<script>
import devCampList from "@/json/devCampList.json";

export default {
  data() {
    return {
      devCampList
    };
  },
  computed: {
    lastDevCamp() {
      return this.devCampList[0];
    }
  }
};
</script>
