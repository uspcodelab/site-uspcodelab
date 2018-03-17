<template>
  <section id="CodeSchools" class="codeschools-section">
    <b-row>
      <b-col>
        <h3 class="section-title codeschools-padding">CodeSchools</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col style="display:flex;">
        <p class="codeschools-padding" style="align-self:flex-end; padding-bottom:3em;">
          Nossas escolas de períodos de férias tem como objetivo um grande projeto de desenvolvimento em equipe e com tecnologias modernas. Uma verdadeira experiência de desenvolvimento!
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col style="padding:0;">
        <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators background="#ababab" :interval="4000" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
          <b-carousel-slide img-src="~/assets/summer-school2-min.jpeg">
            _
          </b-carousel-slide>
          <b-carousel-slide img-src="~/assets/summer-school3-min.jpeg">
            _
          </b-carousel-slide>
          <b-carousel-slide img-src="~/assets/summer-school4-min.jpeg">
            _
          </b-carousel-slide>
        </b-carousel>
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
}

.codeschools-padding {
  padding-left: 2vw;
  @media screen and (min-width: 1200px) {
    padding-left: calc(calc(100vw - 1200px) / 2);
    padding-right: calc(calc(100vw - 1200px) / 2 + 4em);
  }
}
</style>
