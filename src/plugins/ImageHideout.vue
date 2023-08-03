<template>
  <span>
    <span class="cursor-pointer" @click="showImage"> <slot /> </span>
    <div
      v-scroll-lock="imageIsShowing"
      :class="[
        'fixed h-screen w-screen overflow-hidden secret-default flex justify-center items-center ',
        imageIsShowing
          ? 'secret__activated opacity-100 visible'
          : 'opacity-0 invisible',
      ]"
    >
      <div class="absolute h-full w-full" @click="hideImage()" />
      <div v-if="imageIsShowing" class="relative">
        <img
          :src="imagesPaths[randomImage]"
          class="secret-image__activated rounded-lg"
        />
        <div
          class="close-icon-secret__activated cursor-pointer bg-ucl-orange rounded-lg h-8 w-8"
          @click="hideImage()"
        >
          <font-awesome-icon
            :icon="{ prefix: 'fas', iconName: 'times' }"
            size="lg"
            aria-labelledby="secretClose"
          />
        </div>
      </div>
    </div>
  </span>
</template>
<script>
export default {
  props: {
    dirName: {
      type: String,
      required: true,
    },
    timeoutMs: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      imageIsShowing: false,
      imageTimeoutID: undefined,
      randomImage: 1,
      imagesPaths: [],
    };
  },
  mounted() {
    this.getImagesPaths(require.context('../assets/secrets/', true, /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i));
  },
  methods: {
    getImagesPaths(r) {
      r.keys().forEach((key) => {
        if (key.split("/")[1] == this.dirName) {
          this.imagesPaths.push(r(key));
        }
      });
    },
    showImage() {
      this.getRandomImage();
      this.imageIsShowing = true;
      this.setNewTimeout();
    },
    setNewTimeout() {
      if (this.imageTimeoutID) {
        clearTimeout(this.imageTimeoutID);
      }
      this.imageTimeoutID = setTimeout(() => {
        this.imageIsShowing = false;
      }, this.timeoutMs);
    },
    getRandomImage() {
      this.randomImage = Date.now() % this.imagesPaths.length;
    },
    hideImage() {
      if (this.imageTimeoutID) {
        clearTimeout(this.imageTimeoutID);
      }
      this.imageTimeoutID = undefined;
      this.imageIsShowing = false;
    },
  },
};
</script>
<style scoped>
.secret__activated {
  background-color: rgba(0, 0, 0, 0.4);
}

.secret-image__activated {
  max-height: 60vh;
  max-width: 80vw;
}

.close-icon-secret__activated {
  position: absolute;
  box-shadow: 0 2px 10px rgba(57, 63, 72, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: 10px;
}

.secret-default {
  transition: all ease-in-out 0.2s;
  z-index: 99;
  top: 0;
  left: 0;
}
</style>
