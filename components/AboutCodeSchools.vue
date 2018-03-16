<template>
  <section id="CodeSchools" class="codeschools-section">
    <b-row>
      <b-col>
        <h3 class="section-title codeschools-padding">CodeSchools</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col style="display:flex;">
        <p class="codeschools-padding" style="align-self:flex-end; padding-bottom:1.2em;">
          Nossas escolas de períodos de férias tem como objetivo um grande projeto de desenvolvimento em equipe e com tecnologias modernas. Uma verdadeira experiência de desenvolvimento!
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col style="padding:0;">
        <img class="img-fluid" src="~/assets/summer-schools0-grad.jpeg" alt="">
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
  padding: 20vh 0vh 0vh 0vh;
  color: #ffffff;
  background-color: #2c2c2c;
  object-fit: cover;

  img {
    min-height: 50vh;
  }
}

.codeschools-padding {
  padding-left: 2vw;
}
</style>
