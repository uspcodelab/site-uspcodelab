<template>
  <div class="container">
    
    <site-nav-bar/>

    <header class="header">
      <div class="header-background"/>
      <!-- <h1 class="title">USPCodeLab</h1> -->
      <img src="~/assets/UCL-Logo-Text.png" 
           style="z-index: 9; background-color: #ffffff; border-radius: 15px">
    </header>

    <main>

      <section>
        <div class="about" id="about">
          <div class="section-title">
            <h3>Quem somos?</h3>
          </div>
          O USPCodeLab (UCL) é um grupo de extensão universitária fundado por alunos de Ciência da Computação do Instituto de Matemática e Estatística (IME) e que atualmente conta com participantes de outras unidades da USP. O grupo tem por objetivo criar um espaço colaborativo para o desenvolvimento de tecnologia na universidade. Para isso, atua em duas frentes: uma voltada para alunos de cursos de tecnologia (Ciência da Computação, Engenharia da Computação, Sistemas da Informação, etc.), com foco em ajudá-los a se tornarem engenheiros de software capazes de utilizar as melhores ferramentas e técnicas de desenvolvimento disponíveis; e outra para o público geral interessado, para difundir o uso de tecnologia para criação de soluções em suas respectivas áreas.
        </div>
        <img src="~/assets/UCL-Logo.svg" class="ucl-logo">
      </section>

      <section id="HackathonUSP">
        <div class="hackathon-usp-info">
          <div class="section-title">
            <h3>HackathonUSP</h3>
          </div>
          O HackathonUSP é o nosso maior evento. De âmbito USPiano, feito em parceira com a univerdade e focado em quem nunca participou de um hackathon!
        </div>
        <img src="~/assets/logo-hackathonUSP.png">
      </section>

      <section class="info-section" id="dev_journey">
        <div class="info-title">
          <h3>dev.journey()</h3>
        </div>

        <div v-for="obj in dev_section" :key="obj.KEY" class="info">
          <div class="info-text">
            {{ obj.text }}
          </div>
        </div>
      </section>


      <section id="CodeSchools">
        <div class="codeschools">
          <div class="section-title">
            <h3>CodeSchools</h3>
          </div>
          Nossas escolas de períodos de férias tem como objetivo um grande projeto de desenvolvimento em equipe e com tecnologias modernas.
        </div>
      </section>

    </main>

    <site-footer id="footer"/>
  </div>
</template>


<script>
import navBar from "../components/navbar.vue";
import siteFooter from "../components/footer.vue";

export default {
  components: {
    siteNavBar: navBar,
    siteFooter: siteFooter
  },
  data: () => {
    return {
      dev_section: [
        {
          KEY: 1,
          text:
            "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
        },
        {
          KEY: 2,
          text:
            "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
        },
        {
          KEY: 3,
          text:
            "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
        },
        {
          KEY: 4,
          text:
            "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"
        }
      ]
    };
  }
};
</script>
