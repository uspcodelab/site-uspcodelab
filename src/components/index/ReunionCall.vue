<template>
  <section id="reunion-call" class="bg-ucl-black text-ucl-white px-8 md:px-12 lg:px-20 xl:px-0 py-10 text-center">
    <div class="container mx-auto">
      <h1 class="text-ucl-orange text-3xl font-thin tracking-wide pb-8">
        Venha nos conhecer!
      </h1>
      <p class="text-xl lg:text-base text-center leading-normal">
        Reuniões administrativas no IME-USP, abertas <span class="text-ucl-orange"> para todos.</span>
      </p>
      <p class="text-grey-darker text-sm">
        (periodicidade e horários das reuniões deste semestre a serem definidos)
      </p>
      <p class="text-xl lg:text-base text-center leading-normal pt-8">
        Envie-nos um e-mail por <a :href="emailUrl" class="text-ucl-orange">codelab@ime.usp.br</a>,
        ou entre em contato conosco pelo <a :href="telegramUrl" class="text-ucl-orange">Telegram</a>.
      </p>
    </div>
  </section>
</template>
<script>
import socialMedias from "@/json/socialMedias.json";
export default {
  data() {
    return {
      telegramUrl: socialMedias.find((media) => media.iconName === "telegram").url,
      emailUrl: socialMedias.find((media) => media.iconName === "envelope").url,
    };
  },
};
</script>
