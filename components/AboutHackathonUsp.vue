<template>
  <section id="HackathonUSP" class="hackathonusp-section">
    <b-row>
      <b-col sm class="hackathon-text">
        <h3 class="section-title" style="text-align: left">HackathonUSP</h3>
        <p>
          O HackathonUSP é o nosso maior evento. De âmbito USPiano, feito em parceira com a univerdade e focado em quem nunca participou de um hackathon!
        </p>
      </b-col>
      <b-col sm style="text-align: center;" class="hackathon-logo">
        <img src="~/assets/NEWhackathonUSP.svg" alt="">
      </b-col>
    </b-row>
  </section>
</template>

<style lang="scss">
.hackathonusp-section {
  display: flex;
  flex-wrap: wrap;
  font-size: 1.1em;
  height: 100vh;
  width: 100%;
  padding: 20vh 2vh;
  .hackathon-logo {
    height: 60vh;
    img {
      height: 100%;
    }
  }
}

@media (max-width: 480px) {
  .hackathonusp-section {
    .hackathon-logo {
      height: 30vh;
      img {
        height: 100%;
      }
    }
    .hackathon-text {
      order: 2;
    }
  }
}
</style>
