<template>
  <section class="bg-ucl-white text-ucl-black py-20 text-center">
    <div class="container mx-auto flex flex-wrap flex-col leading-loose">
      <div class="mb-20 tracking-wide">
        <p class="text-ucl-orange mb-8 text-center text-5xl">Webdev</p>
        <span>
          Cursos sobre tecnologia onde os participantes são introduzidos a
          ferramentas e técnicas de desenvolvimento introdutórias e avançadas.
        </span>
      </div>
      <div class="flex flex-wrap justify-between mb-20">
        <div class="text-center md:text-left w-full md:w-9/20 mb-4 md:mb-none">
          <h2 class="font-light mb-5" style="color: #ff0000">Youtube</h2>
          <span>
            Desde 2019, administramos o canal do youtube USPCodelab. Postamos
            vídeos educativos sobre computação. Feito por alunos, os vídeos
            abrangem desde cursos introdutórios ao desenvolvimento web até
            técnicas de programação mais avançadas.
          </span>
        </div>
        <img
          src="@/assets/dev-learn/youtube.png"
          class="w-full md:w-1/2 h-full md:h-1/2"
        >
      </div>
      <div class="flex flex-wrap flex-wrap-reverse justify-between">
        <img
          src="@/assets/dev-learn/youtube.png"
          class="w-full md:w-1/2 h-full md:h-1/2"
        >
        <div class="text-center md:text-left w-full md:w-9/20 md:mb-none">
          <h2 class="font-fin mb-5" style="color: #ff34d2">Instagram</h2>
          <span>
            Desde 2019, administramos o canal do youtube USPCodelab. Postamos
            vídeos educativos sobre computação. Feito por alunos, os vídeos
            abrangem desde cursos introdutórios ao desenvolvimento web até
            técnicas de programação mais avançadas.
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px, #ff6900 -10px 10px,
    rgba(149, 157, 165, 0.2) -25px 8px 24px;
}

p > span {
  margin: -5.3px;
}
</style>
