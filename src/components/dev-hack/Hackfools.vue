<template>
  <section class="pb-20 md:pt-20 text-center">
    <div class="container mx-auto flex flex-wrap flex-col leading-loose">
      <div class="mb-10 md:mb-20 tracking-wide">
        <section class="hero image-as-background">
          <div class="hero-container">
            <h1 class="text-ucl-orange mb-8 text-center font-bold text-5xl">
              HACKFOOLS
            </h1>
            <p>
              Com temas leves, ambiente divertido e muitas risadas, esse é o Hackfools.
              É um hackathon cômico, sendo perfeito para mandar embora a tensão do primeiro
              hackathon. Querendo apenas divertir e promover os hackathons, aqui, tentamos sempre fugir
              das competições.
            </p>
          </div>
        </section>
      </div>
      <div v-for="(media, i) in techs" :key="media.title" class="flex flex-wrap md:justify-between justify-center mb-20 rounded shadow-md md:shadow-none pb-10 pt-10 md:pb-0 pt-5 md:pt-5 px-10 md:px-0">
        <a :href="media.url"
        class="w-1/2 h-1/2 md:w-1/4 md:h-1/4"
          >
        <img
        :src="media.src"
        class="rounded-full"
        >
        </a>
        <div class="text-center md:text-left w-full md:w-7/10 mt-4 md:mt-0">
          <h1 class="font-light mb-5 md:mb-0" :style="{ color: media.titleColor }">
            {{ media.title }}
          </h1>
          <span>
            {{ media.description }}
          </span>
          <div>
          <a
            :href="media.url"
            target="_blank"
            >
            <button>
              Veja as imagens
            </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import Hackfools2022 from '@/assets/dev-hack/Hackfools2022.jpeg'
import Hackfools2023 from '@/assets/dev-hack/Hackfools2023.jpeg'
import Hackfools from '@/assets/dev-hack/Hackfools.jpeg'

  export default {
    data() {
      return {
        techs: [
          {
            title: "Hackfools 2022",
            titleColor: "#ff690a",
            description: `
            Realizado no Instituto de Matemática e Estatística, em 2022, o tema escolhido foi
            "Serviços de Pizzaria". Dentre os projetos, destaca-se um
            bot do discord para auxiliar pedidos (que mais atrapalhava do que ajudava)
            e um site que (de uma maneira extrapolada) permitia o cliente escolher o formato da pizza.
            O evento contou tanto com estudantes da EACH quanto com do Butantã.
            `,
            url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
            src: Hackfools2022
          },
          {
            title: "Hackfools 2023",
            titleColor: "purple",
            description: `
            O tema escolhido para 2023 foi "Dominação Mundial". Aqui, os participantes criaram
            ideias mirabolantes (e até enfadonhas) para se dominar o mundo. Tivemos desde uma
            extensão de navegador bizarra até um plano "do mau" que pretendia acabar com o mundo
            para, então, lucrar com o aluguel de bunkers.
          `,
            url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
            src: Hackfools2023
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">

/* HERO */

.image-as-background {
  background-image: url('../../assets/dev-hack/Hackfools.jpeg');
}

.hero {
	background-position: 50% 50%; /* This could be 50% 50%, 0 0, or really anything.  The world is your stinky little oyster! */
	background-repeat: no-repeat;
	background-size: cover;
	height: auto;
	overflow: hidden;
	position: relative;
	width: 100%;

	/* Add a slight overlay on our image */
	&:after {
		background-color: rgba(255,255,255,.85);
		bottom: 0;
		content: '';
		left: -2000%;
		position: absolute;
		right: -2000%;
		top: 0;
		z-index: 1;
	}
}

.hero-container {
	box-sizing: border-box;
	height: auto;
	padding: 100px 50px;
	position: relative;
	text-align: center;
	z-index: 2;

	@media screen and (min-width:640px) {
		height: 100%;
	}

	p {
		font-size: 18px;
		letter-spacing: 1px;
	}
}

.hero-title {
	color: white;
	font-size: 36px;
	font-weight: 500;
	letter-spacing: 1px;
}

p > span {
  margin: -5.3px;
}

img {
  transition: ease-out 0.05s;
}

img:hover {
  transform: scale(1.02);
}

section {
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px, #ff6900 -4px 4px,
    rgba(149, 157, 165, 0.2) -25px 8px 24px;
}

</style>
