<template>
  <a v-if="link" :href="link">
    <button :class="[baseClass, extraStyle]" @click="onClickFunction">
      {{ message }}
    </button>
  </a>
  <button v-else :class="[baseClass, extraStyle]" @click="onClickFunction">
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
    extraStyle: {
      type: String,
      default: ""
    },
    onClickFunction: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return { baseClass: "button" };
  }
};
</script>

<style lang="scss" scoped>
.button {
  border: none;
  border-radius: $br-l;
  box-shadow: $bs-btn;
  font-size: $font-size-s;
  padding: $p-btn;

  color: $ucl-light;
  background-color: $ucl-orange;

  // click effect
  margin-bottom: 7px;

  &:hover {
    background-color: $ucl-orange-light;
  }

  &:active {
    background-color: $ucl-orange-light;
    box-shadow: $bs-btn-pressed;

    // click effect
    margin-bottom: 0;
    margin-top: 3px;
  }

  &:focus {
    background-color: $ucl-orange-light;
    border: $b-btn-pressed;
    box-shadow: $bs-btn-pressed;
    outline: 0;

    // click effect
    margin-bottom: 0;
    margin-top: 3px;
  }
}

.btn-white {
  background-color: $ucl-light;
  color: $ucl-orange;

  &:hover {
    background-color: $ucl-orange;
    color: $ucl-light;
  }

  &:active {
    background-color: $ucl-orange;
    color: $ucl-light;
  }

  &:focus {
    background-color: $ucl-orange;
    color: $ucl-light;
  }
}
</style>
