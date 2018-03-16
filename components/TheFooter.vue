<template>
  <footer class="footer-distributed" id="footer">
    <b-row>
      <b-col class="footer-left" style="text-align: center">
        <img src="~/assets/UCL-Logo_Footer.svg" style="border-radius: 10px;">
      </b-col>
      <b-col class="footer-center">
        <div>
          <i class="fa fa-map-marker" style="font-size: 18px;"/>
          <p><span>Rua do Matão, 1010 - Cidade Universitária</span> São Paulo, SP</p>
        </div>

        <div>
          <i class="fa fa-envelope" style="font-size: 18px;"/>
          <p><a href="mailto:codelab@ime.usp.br">codelab@ime.usp.br</a></p>
        </div>
      </b-col>
      <b-col class="footer-right">
        <p class="footer-company-about">
          <span>USPCodeLab</span>
        </p>
        <p class="footer-links">
          <a href="#" v-scroll-to="'#dev-journey'" style="display: block">dev.journey()</a>
          <a href="#" v-scroll-to="'#CodeSchools'" style="display: block">CodeSchools</a>
          <a href="#" v-scroll-to="'#HackathonUSP'" style="display: block">HackathonUSP</a>
        </p>
      </b-col>
    </b-row>
    <b-row class="footer-icons">
      <a href="https://www.facebook.com/uspcodelab/"><i class="fa fa-facebook"/></a>
      <a href="https://www.gitlab.com/uspcodelab/"><i class="fa fa-gitlab"/></a>
    </b-row>
  </footer>
</template>

<style lang="scss">
.footer-distributed {
  background-color: #292c2f;
  color: #ffffff;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 10vh 2vw;
  font-size: 14px;

  .footer-company-about {
    line-height: 20px;
    color: #92999f;
    font-size: 13px;
    font-weight: normal;
    margin: 0;

    span {
      display: block;
      color: #ffffff;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }

  .footer-left {
    text-align: center;
    padding-bottom: 5vh;
  }
  .footer-center {
    justify-content: center;
    font-weight: bold;

    span {
      font-size: 16px;
    }
  }
  .footer-right {
    justify-content: center;
    text-align: center;
  }
  .footer-links {
    a {
      color: #ffffff;
      margin: 20px 0 12px;
      font-weight: bold;
      padding: 0;
    }
  }
  .footer-icons {
    justify-content: center;
    margin-top: 25px;
    a {
      width: 35px;
      height: 35px;
      background-color: #33383b;
      cursor: pointer;

      font-size: 20px;
      color: #ffffff;
      text-align: center;
      line-height: 35px;
      margin-right: 3px;
      margin-bottom: 10px;
    }
  }
}
</style>
