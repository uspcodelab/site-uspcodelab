<template>
  <section class="section section--dark">
    <h1 class="title">
      Venha nos conhecer!
    </h1>
    <p class="description">
      Reuniões abertas <b class="text-ucl-orange">{{ date }}</b> às
      <b class="text-ucl-orange">{{ time }}</b> na
      <b class="text-ucl-orange">{{ local }}</b
      >!
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      date: "toda quinta-feira",
      time: "13h30",
      local: "sala B7 do IME-USP"
    };
  }
};
</script>
