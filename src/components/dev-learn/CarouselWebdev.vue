<template>
    <carousel id="carousel"
    :autoplay="true"
    :autoplay-timeout="5000"
    :loop="true"
    :pagination-enabled="true"
    :pagination-active-color="'#ff6900'"
    :pagination-color="'#505050'"
    :per-page="1"
    class=" w-full">
    <slide>
    <img src="@/assets/dev-camp/team-process.jpg">
    </slide>
    <slide>
    <img src="@/assets/dev-camp/team-request.jpg">
    </slide>
    <slide>
    <img src="@/assets/dev-camp/team-user.jpg">
    </slide>
    </carousel>
</template>

<script>
  export default {
    data: {
      alt: "Icone dev learn"
    }
  }
</script>

<style scoped>

img {
  border-radius: 20px !important;
}

bla {
  background-color: #000000;
  border-radius: 20px !important;
  transition: ease-out 0.05s !important;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px, #ff6900 -10px 10px,
    rgba(149, 157, 165, 0.2) -25px 8px 24px !important;
}

</style>
