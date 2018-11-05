<template>
  <section id="reunion-call" class="bg-ucl-black text-ucl-white px-8 md:px-12 lg:px-20 xl:px-0 py-10 text-center">
    <div class="container mx-auto">
      <h1 class="text-ucl-orange text-4xl font-bold tracking-wide pb-4">
        Venha nos conhecer!
      </h1>
      <p class="text-xl lg:text-base text-center leading-normal pb-4">
        Reuniões abertas <b class="text-ucl-orange">{{ days }}</b> 
        às <b class="text-ucl-orange">{{ time }}</b> 
        na <b class="text-ucl-orange">{{ local }}</b>!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    days: {
      type: String,
      default() {
        return "";
      }
    },
    time: {
      type: String,
      default() {
        return "";
      }
    },
    local: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>
