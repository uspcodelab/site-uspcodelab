<template>
  <div>
    <div
      v-if="data.right"
      class="flex flex-col py-10 mx-4 md:mx-0 shadow-md items-center my-6 md:my-20 lg:my-24 md:flex-row md:justify-center md:shadow-none bg-section-bg md:bg-transparent rounded-lg"
    >
      <div class="w-2/3">
        <img :src="data.imgUrl" :alt="data.imgAlt" />
      </div>

      <div
        :class="{ 'md:mb-12': data.name == 'dev.hire( )' }"
        class="flex flex-col items-center md:items-start md:ml-24"
      >
        <h1 class="md:text-5xl text-center pt-4">{{ data.name }}</h1>
        <p
          class="my-5 text-center text-grey-darker leading-loose md:text-left mx-2 md:mx-1"
          v-html="data.description"
        />
        <Button v-if="data.to" :link="data.to">Saiba mais</Button>
      </div>
    </div>

    <div
      v-else
      class="flex flex-col py-10 mx-4 md:mx-0 shadow-md items-center my-6 md:my-20 lg:my-24 md:flex-row-reverse md:justify-center md:shadow-none bg-section-bg md:bg-transparent rounded-lg"
    >
      <div class="w-2/3">
        <img :src="data.imgUrl" :alt="data.imgAlt" />
      </div>

      <div class="flex flex-col items-center md:items-start md:mr-24">
        <h1 class="md:text-5xl text-center pt-4">{{ data.name }}</h1>
        <p
          class="my-5 text-center text-grey-darker leading-loose md:text-left mx-2 md:mx-1"
          v-html="data.description"
        />
        <Button v-if="data.to" :link="data.to">Saiba mais</Button>
      </div>
    </div>

    <dev-road v-if="data.name != 'dev.research( )'" :direction="data.right" />
  </div>
</template>

<script>
import Button from "@/components/Button";
import DevRoad from "@/components/dev-journey/DevRoad";

export default {
  components: {
    Button,
    DevRoad,
  },
  props: {
    data: {
      type: Object,
      default() {
        return { name: "", description: "", imgUrl: "", imgAlt: "", to: "" };
      },
    },
  },
};
</script>
