<template>
  <div>
    <div
      ref="content"
      :class="[{ 'animated-content-show': showContent }, type]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "left",
    },
  },
  data() {
    return {
      showContent: false,
      observer: null,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.showContent = true;
          this.observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );
    this.observer.observe(this.$refs.content);
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
};
</script>

<style scoped>
.top {
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s;
  transform: translateY(-20%);
}

.bottom {
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s;
  transform: translateY(20%);
}

.left {
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s;
  transform: translateX(-20%);
}

.right {
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s;
  transform: translateX(20%);
}

.fade {
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s;
}

.animated-content-show {
  opacity: 1;
  transform: translateX(0);
  transform: translateY(0);
}
</style>
