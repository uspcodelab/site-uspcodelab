<template>
  <section>
    <b-row id="head" class="header">
      <b-col lg="7" class="header-text">
        <h1>
          USPCodeLab
        </h1>
        <h3>
          Grupo de extensão universitária com o objetivo  de criar um <b>espaço colaborativo</b> para o desenvolvimento de <b>tecnologia</b> na <b>universidade</b>
        </h3>
      </b-col>
      <b-col lg="5" style="text-align: center; overflow: hidden;">
        <img src="/UCL-Logo.svg" class="header-logo">
      </b-col>
    </b-row>
  </section>
</template>

<style lang="scss">
@font-face {
  font-family: Montserrat;
  font-weight: normal;
  src: url("/Montserrat-Regular.otf");
}

@font-face {
  font-family: Montserrat;
  font-weight: 600;
  src: url("/Montserrat-Medium.otf");
}

@font-face {
  font-family: Montserrat;
  font-weight: bold;
  src: url("/Montserrat-Bold.otf");
}

.row {
  margin-right: 0;
  margin-left: 0;
}
.header {
  display: flex;
  min-height: 100vh;
  width: 100%;
  padding: 20vh 3vw 3vh 3vw;
  background-image: linear-gradient(#ff8b46, $main-color);
  justify-content: center;
  align-items: center;

  .header-logo {
    z-index: 0;
    width: calc(calc(60vw + 60vh) / 3);
    max-width: 400px;
  }

  p {
    color: #ffffff;
    font-size: 1.1em;
  }

  h3,
  h1 {
    color: #ffffff;
  }

  h1 {
    font-family: Montserrat, sans;
    font-size: 3em;
    font-weight: 600;
  }

  @media screen and (min-width: 1200px) {
    padding-left: calc(calc(100vw - 1200px) / 2);
    padding-right: calc(calc(100vw - 1200px) / 2 + 4em);
  }
}

.header-text {
  flex-wrap: wrap;
}
</style>
