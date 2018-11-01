<template>
  <a v-if="link" :href="link">
    <button :class="[transparent ? transparentBtn : solidBtn, baseClasses]" @click="onClickFunction">
      {{ message }}
    </button>
  </a>
  <button v-else :class="[transparent ? transparentBtn : solidBtn, baseClasses]" @click="onClickFunction">
    {{ message }}
  </button>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: "Botão"
    },
    transparent: {
      type: Boolean,
      default: false
    },
    onClickFunction: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      baseClasses: "text-base font-semibold py-2 px-6 rounded shadow-md",
      solidBtn: "bg-ucl-orange hover:bg-ucl-orange-dark text-ucl-white",
      transparentBtn:
        "bg-transparent hover:bg-ucl-orange text-ucl-orange hover:text-ucl-white border border-ucl-orange hover:border-transparent"
    };
  }
};
</script>
