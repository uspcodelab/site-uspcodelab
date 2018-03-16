<template>
  <footer class="footer-distributed" id="footer">
    <b-row>
      <b-col class="footer-left" style="text-align: center">
        <img src="~/assets/UCL-Logo_Footer.svg" style="border-radius: 10px;">
      </b-col>
      <!-- <b-col class="footer-center">
        <div>
          <i class="fa fa-envelope" style="font-size: 18px;"/>
          <p><a href="mailto:codelab@ime.usp.br">codelab@ime.usp.br</a></p>
          <a href="https://www.facebook.com/uspcodelab/" class="facebook"><i class="fa fa-facebook"/></a>
          <a href="https://www.gitlab.com/uspcodelab/" class="gitlab"><i class="fa fa-gitlab"/></a>
        </div>
      </b-col> -->
      <b-col class="footer-right" style="text-align: center">
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
    <b-row>
      <iframe width="600" height="450" frameborder="0" class="map" src="https://www.google.com/maps/embed/v1/place?q=Rua%20do%20Mat%C3%A3o%2C%201010%20-%20Cidade%20Universit%C3%A1ria%20S%C3%A3o%20Paulo%2C%20SP&key=AIzaSyCZVWkSqO4NaGO350vPgR_GHZJr9GPp4ZM" allowfullscreen/>
    </b-row>
    <b-row class="footer-center">
      <div>
        <a href="mailto:codelab@ime.usp.br"><i class="fa fa-envelope"/></a>
        <a href="https://www.facebook.com/uspcodelab/" class="facebook"><i class="fa fa-facebook"/></a>
        <a href="https://www.gitlab.com/uspcodelab/" class="gitlab"><i class="fa fa-gitlab"/></a>
      </div>
    </b-row>
  </footer>
</template>

<style lang="scss">
.map {
  height: 240px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
}
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
    text-align: center;

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
    text-align: center;
    a {
      color: #ffffff;
      margin: 20px 0 12px;
      font-weight: bold;
      padding: 0;
    }
  }
  .footer-icons {
    text-align: center;
    padding-top: 30px;
    padding-bottom: 38px;
  }
  .fa {
    font-size: 30px;
    margin-right: 15px;
    margin-left: 20px;
    background-color: white;
    color: #182c39;
    border-radius: 51%;
    padding: 10px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 31px;
    text-decoration: none;
    transition: color 0.2s;
  }
  .fa-facebook:hover {
    color: #2b55ff;
  }
  .fa-facebook:focus {
    color: #2b55ff;
  }

  .fa-gitlab:hover {
    color: #e24329;
  }
  .fa-gitlab:focus {
    color: #e24329;
  }
}
</style>
