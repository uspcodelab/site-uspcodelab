<template>
  <section id="CodeSchools" class="codeschools-section">
    <b-row>
      <b-col>
        <h3 class="section-title">CodeSchools</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>
          Nossas escolas de períodos de férias tem como objetivo um grande projeto de desenvolvimento em equipe e com tecnologias modernas. Uma verdadeira experiência de desenvolvimento!
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm lg="3" md="4" xs="6" style="padding-top: 5vh;">
        <img class="img-fluid" src="~/assets/summer-school1.png" alt="">
      </b-col>
      <b-col sm lg="3" md="4" xs="6" style="padding-top: 5vh; padding-bottom: 5vh;">
        <img class="img-fluid" src="~/assets/summer-school2.png" alt="">
      </b-col>
      <b-col sm lg="3" md="4" xs="6" style="padding-top: 5vh; padding-bottom: 5vh;">
        <img class="img-fluid" src="~/assets/summer-school3.png" alt="">
      </b-col>
      <b-col sm lg="3" md="4" xs="6" style="padding-top: 5vh; padding-bottom: 5vh;">
        <img class="img-fluid" src="~/assets/summer-school4.png" alt="">
      </b-col>
    </b-row>
  </section>
</template>

<style lang="scss">
.codeschools-info {
  font-size: 1.3em;
}
.codeschools-section {
  display: flex;
  flex-wrap: wrap;
  font-size: 1.1em;
  height: 100%;
  width: 100%;
  padding: 20vh 2vh;
  color: #ffffff;
  background-color: #2c2c2c;

  img {
    width: 310px;
    height: 230px;
    border: 5px solid #000000;
    border-radius: 5px;
  }
}
</style>
