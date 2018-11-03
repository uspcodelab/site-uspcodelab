<template>
  <div v-scroll="handleMobileMenuScroll" class="menu-wrapper">
    <div class="menu-btn-wrapper">
      <button id="menuBtn" :class="['menu-btn', btnState ? 'btn-orange' : 'btn-white']" @click="toggle"> {{ btnText }} </button>
    </div>
    <nav v-scroll-lock="toggled" :class="{ 'menu__activated' : toggled, 'menu__hidden' : !toggled }">
      <ul class="menu-list">
        <router-link v-for="link in links" :to="link.url" :key="link.name" tag="li" class="menu-list-item" @click="toggle">
          <a>{{ link.name }}</a>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      btnText: "MENU",
      btnState: false,
      toggled: false
    };
  },
  methods: {
    toggle: function() {
      this.toggled = !this.toggled;
      this.btnText = this.toggled ? "FECHAR" : "MENU";
    },
    handleMobileMenuScroll: function(evt, el) {
      if (window.scrollY <= 60) {
        if (this.btnState == true) this.btnState = false;
      } else {
        if (this.btnState == false) this.btnState = true;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.menu-btn-wrapper {
  display: flex;
  justify-content: center;

  .menu-btn {
    position: fixed;
    bottom: $btn-round-bottom;

    box-shadow: $bs-btn-menu;
    border: none;
    border-radius: $br-round;
    outline: none;
    z-index: 100;

    height: $btn-round-height;
    width: $btn-round-height;

    -webkit-transition: background-color 0.25s ease 0s;
    -moz-transition: background-color 0.25s ease 0s;
    -o-transition: background-color 0.25s ease 0s;
    transition: background-color 0.25s ease 0s;
  }

  .menu-btn__activated {
    background-color: $ucl-light;
    color: $ucl-orange;

    font-size: 0.9rem;
  }

  .btn-orange {
    background-color: $ucl-orange;
    color: $ucl-light;
  }

  .btn-white {
    background-color: $ucl-light;
    color: $ucl-orange;
  }
}

.menu-wrapper {
  display: flex;
  justify-content: center;
}

nav {
  background-color: $ucl-orange;
  position: fixed;
  overflow: hidden;
  z-index: 99;

  height: 100vh;
  width: 100vw;
}

.menu__hidden {
  border-radius: $br-round;
  bottom: 0;
  height: $btn-round-height;
  width: $btn-round-height;

  opacity: 0;
  visibility: hidden;

  transform: scale(0);
  transition: all 0.4s ease-in-out 0.1s;
}

.menu__activated {
  border-radius: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;

  opacity: 1;
  visibility: visible;

  transform: scale(1);
  transition: all 0.4s ease-in-out 0.1s;
}

.menu-list {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  list-style-type: none;

  height: 100%;
  padding-left: 0;
  padding-bottom: $btn-round-pb;

  .menu-list-item {
    padding: 1rem 2rem 1rem 2rem;
    transition: background-color 0.3s;
    width: 100%;

    a {
      color: $ucl-light;
      font-size: $font-size-xl;
      text-decoration: none;
    }

    &:active {
      background-color: $ucl-orange-light;
    }
  }
}
</style>
