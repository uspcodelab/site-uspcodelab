<template>
  <div>
    <div v-if="data.right" class="flex flex-col py-10 shadow-lg items-center my-24 md:flex-row md:justify-center md:shadow-none">
      <div class="w-2/5 bg-white rounded-full border-ucl-orange border">
        <img :src="data.imgUrl" :alt="data.imgAlt">
      </div>

      <div class="flex flex-col items-center md:items-start md:ml-24" >
        <h1 class="md:text-5xl text-center pt-4">{{ data.name }}</h1>
        <p v-html="data.description" class="my-5 text-xl text-center md:text-left"/>
        <Button :link="data.to">Saiba mais</Button>
      </div>
    </div>

    <div v-else class="flex flex-col py-10 shadow-lg items-center md:my-20 lg:my-24 w-full md:flex-row-reverse md:justify-center md:shadow-none">
      <div class="w-2/5 bg-white rounded-full border-ucl-orange border">
        <img :src="data.imgUrl" :alt="data.imgAlt" >
      </div>

      <div class="flex flex-col items-center md:items-start md:mr-24">
        <h1 class="md:text-5xl text-center pt-4">{{ data.name }}</h1>
        <p v-html="data.description" class="my-5 text-xl text-center md:text-left"/>
        <Button :link="data.to">Saiba mais</Button>
      </div>
    </div>

    <dev-road v-if="data.name != 'dev.research()'" :direction="data.right"/>
    
  </div>

</template>

<script>

import Button from "@/components/Button";
import DevRoad from "@/components/DevRoad";

export default {
  components: {
    Button,
    DevRoad
  },
  props: {
    data: {
      type: Object,
      default() {
        return { name: "", description: "", imgUrl: "", imgAlt: "", to: "" };
      }
    }
  }
};
</script>
