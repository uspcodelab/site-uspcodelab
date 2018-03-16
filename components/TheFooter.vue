<template>
  <footer class="footer-distributed" id="footer">
    <b-row>
      <b-col class="footer-left">
        <img src="~/assets/UCL-Logo_Footer.svg" style="border-radius: 10px;">
        <p class="footer-links">
          ·
          <a href="#" v-scroll-to="'#dev-journey'">dev.journey()</a>
          ·
          <a href="#" v-scroll-to="'#CodeSchools'">CodeSchools</a>
          ·
          <a href="#" v-scroll-to="'#HackathonUSP'">HackathonUSP</a>
          ·
        </p>
      </b-col>
      <b-col class="footer-center">
        <div>
          <i class="fa fa-map-marker"/>
          <p><span>Rua do Matão, 1010 - Cidade Universitária</span> São Paulo, SP</p>
        </div>

        <div>
          <i class="fa fa-envelope"/>
          <p><a href="mailto:codelab@ime.usp.br">codelab@ime.usp.br</a></p>
        </div>
      </b-col>
      <b-col class="footer-right">
        <p class="footer-company-about">
          <span>USPCodeLab</span>
          Grupo de extensão universitária com foco em desenvolvimento web e mobile. Nossos principais projetos são grupos de estudos, realização de palestras e participação e organização de hackathons.
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
  text-align: left;
  padding: 5vh 2vw;
  font-size: 14px;
}
.footer-distributed {
  align-items: center;
  justify-content: center;
}
.footer-center {
  justify-content: center;
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
// /* Footer links */

.footer-links a {
  color: #ffffff;
  margin: 20px 0 12px;
  font-weight: bold;
  padding: 0;
}

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-company-about span {
  display: block;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}
// @media (max-width: 880px) {
//   .footer-distributed {
//     font: bold 14px sans-serif;
//     height: 100vh;
//   }

//   .footer-distributed .footer-left,
//   .footer-distributed .footer-center,
//   .footer-distributed .footer-right {
//     display: flex;
//     flex-wrap: wrap;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     text-align: center;
//   }
//   .footer-distributed .footer-center i {
//     margin-left: 0;
//   }
//   .footer-distributed .footer-icons a {
//     margin-bottom: 1vh;
//   }
// }
</style>
