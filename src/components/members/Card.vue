<template>

  <div class="card card--light">

  
    <div class="image-wrapper">
      <img :src="data.imgUrl" :alt="data.imgAlt" :class="data.imgClass" />
    </div>

    <div class="card__content">
      <div class="card__title">{{ data.title }}</div>
      
      <p class="card__description" v-html="data.description" />
      <div class="flex flex-row">
        <span
          v-for="(role, key, index) in data.roles"
          :key="index"
        >
          <div class="tooltip">
            <img
            :src="role.imgUrl"
            :alt="role.imgAlt"
            class="small_role_icon"
            />
            <span class="tooltiptext">{{ role.name }}</span>
          </div> 
        </span>
      </div>
    </div>
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
          labels: [],
          roles: []
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

.image-wrapper{
  display: flex;
  justify-content: center;
  padding: 5%;
}
.card--dark {
  @apply bg-ucl-black;
  @apply text-ucl-white;
}

.card__content {
  @apply flex-grow;
  @apply p-1;
}
@screen md {
  .card__content {
    @apply px-12 my-6;
  }
}

.card__title {
  @apply text-ucl-black;
  @apply text-2xl;
  @apply font-bold;
  @apply w-full;
  @apply pb-4;
  @apply px-0;
}

.card__description {
  @apply text-grey-darker;
  @apply text-base;
  @apply leading-normal;
  @apply pb-4;
}

.card__link {
  @apply no-underline flex justify-center items-end;
}

.card__link__image {
  object-fit: contain;
}

.card__link__icon {
  @apply absolute text-grey text-3xl pb-3 pr-3;
}

.small_role_icon {
  @apply w-8;
  @apply h-8;
}
/* Tooltip container */
.tooltip {
  /* position: relative; */
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  width: 120px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>


</style>
