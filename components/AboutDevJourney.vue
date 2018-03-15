<template>
  <section id="dev-journey" class="dev-journey-section">
    <b-row>
      <b-col>
        <h3 class="section-title white">dev.journey()</h3>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm class="dev-journey-info">
        <div class="dev-journey-info-icon">
          <img src="~/assets/play-button-sing.svg">
        </div>
        <h4>dev.start()</h4>
        <p>
          Ciclo de oficinas para apresentar programação web para o público geral da universidade, com tópicos como <em>HTML</em>, <em>CSS</em> e <em>JavaScript</em>.
        </p>
      </b-col>

      <b-col sm class="dev-journey-info">
        <div class="dev-journey-info-icon">
          <img src="~/assets/study.svg">
        </div>
        <div>
          <h4>dev.learn()</h4>
          <p>
            Um dos nossos grupos de estudo com reuniões semanais, ao longo de um semestre, para aplicar os conhecimentos em projetos propostos pela organização.
          </p>  
        </div>
      </b-col>

      <b-col sm class="dev-journey-info">
        <div class="dev-journey-info-icon">
          <img src="~/assets/startup.svg">
        </div>
        <h4>dev.boost()</h4>
        <p>
          Uma continuação da fase anterior, agora com projetos em times, voltada para aprendizado de técnicas de modelagem, implementação e manutenção de sistemas.
        </p>
      </b-col>

      <b-col sm class="dev-journey-info">
        <div class="dev-journey-info-icon">
          <img src="~/assets/resume.svg">
        </div>
        <h4>dev.hire()</h4>
        <p>
          Nosso programa de captação de currículos de alunos, em particular os participantes do programa, para facilitar o contato profissional com empresas parceiras.
        </p> 
      </b-col>

    </b-row>
  </section>
  
</template>

<script>
// export default {
//   data: () => {
//     return {
//       dev_section: [
//         {
//           KEY: 1,
//           icon: "play-button-sing.svg",
//           text:
//             "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
//         },
//         {
//           KEY: 2,
//           icon: "study.svg",
//           text:
//             "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
//         },
//         {
//           KEY: 3,
//           icon: "startup.svg",
//           text:
//             "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
//         },
//         {
//           KEY: 4,
//           icon: "resume.svg",
//           text:
//             "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
//         }
//       ]
//     };
//   },
//   computed: {
//     path(obj) {
//       alert(obj);
//       return "~/assets/" + "resume" + ".svg";
//     }
//   }
// };
</script>

<style lang="scss">
.dev-journey-section {
  background: $main-color;
  color: $secondary-color;

  width: 100%;
  font-size: 1.1em;
  height: 100%;
  padding: 10vh 2vh;
}

.dev-journey-info {
  height: 85vh;
  padding: 0 5vw;
  text-align: center;
  // display: flex;
  // flex-flow: row wrap;
  // justify-content: center;
  // align-items: center;
}

.dev-journey-info-icon {
  padding: 5vh 0vh;
  fill: $secondary-color;
  img {
    width: 10em;
  }
}

.dev-journey-info h4 {
  padding: 5vh 0vh;
}
</style>
