<template>
  <section>
    <b-row id="head" class="header">
      <b-col sm class="header-text">
        <p>
          O USPCodeLab (UCL) é um grupo de extensão universitária com o objetivo  de criar um espaço colaborativo para o desenvolvimento de tecnologia na universidade
        </p>
      </b-col>
      <b-col sm style="text-align: center;">
        <img src="~/assets/UCL-Logo.svg" class="header-logo">
      </b-col>
    </b-row>
  </section>
</template>

<style lang="scss">
.row {
  margin-right: 0;
  margin-left: 0;
}
.header {
  display: flex;
  height: 100vh;
  width: 100%;
  padding: 20vh 3vw 3vh 3vw;
  background-image: linear-gradient(#ff8b46 0%, $main-color 100%);
  justify-content: center;
  align-items: center;

  .header-logo {
    z-index: 9;
    width: 70vw;
    max-width: 400px;
    border-radius: 50%;
  }

  p {
    color: #ffffff;
    font-size: 1.1em;
  }
}

@media (max-width: 480px) {
  .header {
    .header-logo {
      order: 1;
    }
    .header-text {
      order: 2;
    }
  }
}
</style>
