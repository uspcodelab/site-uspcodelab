<template>
  <div v-scroll="handleMobileMenuScroll" class="flex justify-center">
    <div class="menu-btn-wrapper flex justify-center">
      <button id="menuBtn" :class="['menu-btn fixed h-16 w-16 z-50 border-0 rounded-full outline-none', btnState || toggled ? 'bg-ucl-white text-ucl-orange' : 'bg-ucl-orange text-ucl-white']" @click="toggle">
        <font-awesome-icon v-if="!toggled" :icon="{ prefix: 'fas', iconName: 'bars' }" size="lg" />
        <font-awesome-icon v-else :icon="{ prefix: 'fas', iconName: 'times' }" size="lg" />
      </button>
    </div>
    <nav v-scroll-lock="toggled" :class="['fixed bg-ucl-orange overflow-hidden z-40', toggled ? 'menu__activated h-screen w-screen opacity-100 visible pin-b rounded-none' : 'menu__hidden h-screen w-screen opacity-0 invisible pin-b rounded-full']">
      <ul class="menu-list h-full pl-0 pb-32 flex flex-col justify-end items-start list-reset">
        <router-link v-for="link in links" :to="link.url" :key="link.name" tag="li" class="menu-list-item px-8 py-4 w-full text-ucl-white text-4xl no-underline hover:bg-ucl-orange-light" @click="toggle">
          {{ link.name }}
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
      btnState: true,
      toggled: false
    };
  },
  methods: {
    toggle: function() {
      this.toggled = !this.toggled;
      this.btnText = this.toggled ? "FECHAR" : "MENU";
    },
    handleMobileMenuScroll: function(evt, el) {
      if (window.scrollY > 60) {
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
  .menu-btn {
    bottom: 1rem;
    box-shadow: 0 2px 10px rgba(57, 63, 72, 0.5);

    -webkit-transition: background-color 0.25s ease 0s;
    -moz-transition: background-color 0.25s ease 0s;
    -o-transition: background-color 0.25s ease 0s;
    transition: background-color 0.25s ease 0s;
  }
}

.menu__hidden {
  transform: scale(0);
  transition: all 0.2s ease-in-out 0.2s;
}

.menu__activated {
  transform: scale(1);
  transition: all 0.2s ease-in-out 0.2s;
}

.menu-list {
  .menu-list-item {
    transition: background-color 0.3s;
  }
}
</style>
