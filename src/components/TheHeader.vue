<template>
  <header id="header" class="header w-screen h-screen md:h-full flex flex-wrap flex-row-reverse px-3 pt-5 md:pb-5 pb-footer">
    <div class="w-full md:w-1/2 flex items-end md:items-center justify-center md:pb-4">
      <img src="@/assets/logos/ucl-mark-alpha.svg" class="w-4/5 md:w-3/5 rounded-full">
    </div>
    <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center px-4 md:px-12">
      <h1 class="text-4xl font-bold tracking-wide">
        USPCodeLab
      </h1>
      <p class="text-lg leading-normal mb-4">
        Grupo de extensão universitária que tem como objetivo
        <b>estimular a inovação tecnológica na USP</b>
      </p>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  min-height: calc(100vh - 4rem);

  color: $ucl-light;
  background-image: linear-gradient(#ff8b46, $ucl-orange);
}
</style>
