<template>
  <section class="hero image-as-background flex justify-center">
    <div class="hero-container container">
      <custom-transition type="fade">
        <h1 class="text-ucl-orange mb-8 text-center font-bold text-5xl">
          HACKFOOLS
        </h1>
      </custom-transition>
      <custom-transition type="top">
        <p>
          Com temas leves, ambiente divertido e muitas risadas, esse é o
          Hackfools. É um hackathon cômico, sendo
          <span class="text-ucl-orange"
            >perfeito para mandar embora a tensão do primeiro hackathon</span
          >. Com intenção de divertir e promover esses adoráveis eventos, aqui,
          tentamos sempre <b>fugir das competições.</b>
        </p>
      </custom-transition>
    </div>
  </section>
</template>

<style scoped lang="scss">
.image-as-background {
  background-image: url("../../../assets/dev-hack/Hackfools.jpeg");

  /* Set a specific height */
  min-height: 500px;
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
    background-color: rgba(255, 255, 255, 0.85);
    bottom: 0;
    content: "";
    left: -2000%;
    position: absolute;
    right: -2000%;
    top: 0;
    z-index: 1;
  }

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
}

.hero-container {
  box-sizing: border-box;
  height: auto;
  padding: 100px 50px;
  position: relative;
  text-align: center;
  z-index: 2;

  @media screen and (min-width: 640px) {
    height: 100%;
  }

  p {
    line-height: 1.7em;
  }
}
</style>
