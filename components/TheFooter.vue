<template>
  <footer class="footer-distributed" id="footer">
    <div class="footer-left">
      <img src="~/assets/UCL-Logo_Text.svg" style="border-radius: 10px;">

      <p class="footer-links">
        <a href="#about">Sobre</a>
        ·
        <a href="#dev_journey">dev.journey()</a>
        ·
        <a href="#CodeSchools">CodeSchools</a>
        ·
        <a href="#HackathonUSP">HackathonUSP</a>
        ·
      </p>

      <p class="footer-company-name">USPCodeLab - 2018</p>
    </div>

    <div class="footer-center">
      <div>
        <i class="fa fa-map-marker"/>
        <p><span>Rua do Matão, 1010 - Cidade Universitária</span> São Paulo, SP</p>
      </div>

      <div>
        <i class="fa fa-envelope"/>
        <p><a href="mailto:codelab@ime.usp.br">codelab@ime.usp.br</a></p>
      </div>
    </div>

    <div class="footer-right">
      <p class="footer-company-about">
        <span>Sobre</span>
        Grupo de extensão universitária com foco em desenvolvimento web e mobile. Nossos principais projetos são grupos de estudos, realização de palestras e participação e organização de hackathons.
      </p>

      <div class="footer-icons">
        <a href="https://www.facebook.com/uspcodelab/"><i class="fa fa-facebook"/></a>
        <!-- <a href="#"><i class="fa fa-twitter"/></a>
        <a href="#"><i class="fa fa-linkedin"/></a> -->
        <a href="https://www.gitlab.com/uspcodelab/"><i class="fa fa-gitlab"/></a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer-distributed {
  background-color: #292c2f;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;

  padding: 55px 50px;
  margin-top: 80px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left {
  width: 40%;
}

/* The company logo */

.footer-distributed h3 {
  color: #ffffff;
  font: normal 36px "Cookie", cursive;
  margin: 0;
}

/* Footer links */

.footer-distributed .footer-links {
  color: #ffffff;
  margin: 20px 0 12px;
  padding: 0;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}

.footer-distributed .footer-company-name {
  color: #8f9296;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center {
  width: 35%;
}

.footer-distributed .footer-center i {
  background-color: #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-distributed .footer-center p a {
  color: #5383d3;
  text-decoration: none;
}

/* Footer Right */

.footer-distributed .footer-right {
  width: 20%;
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

.footer-distributed .footer-icons {
  margin-top: 25px;
}

.footer-distributed .footer-icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #33383b;
  border-radius: 2px;

  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;

  margin-right: 3px;
  margin-bottom: 5px;
}
</style>
