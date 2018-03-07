<template>
  <div class="container">
    
    <site-nav-bar/>

    <header class="header">
      <div class="header-background"/>
      <h1 class="title">USPCodeLab</h1>
      <div class="logo"/>
    </header>


    <main>
      <div class="info-section" id="dev_journey">
        <div class="info-title">
          <h3>dev.journey()</h3>
        </div>

        <div v-for="obj in dev_section" :key="obj.KEY" class="info">
          <div class="info-text">
            {{ obj.text }}
          </div>
        </div>
      </div>

      <div class="hackathon-usp">
        <div class="hackathon-usp-info">
          <div class="hackathon-usp-title">
            <h3>HackathonUSP</h3>
          </div>
          O HackathonUSP é o nosso maior evento, um hackathon focado para alunos da USP e que visa melhorar algum aspecto da universidade. Geralmente são realizadas duas edições por ano e o foco é em alunos que nunca participaram de um hackathon.
        </div>
        <div class="hackathon-logo"/>
      </div>

      <div class="codeschools">
        <div class="section-title">
          <h3>Code Schoools</h3>
        </div>

        <div class="codeschools-photos"/>

        <div class="codeschools-info">
          Nossas Code Schools são escolas que acontecem no período de férias escolares,  num período de normalmente uma semana de trabalho intenso. Nelas aplicamos todo o conhecimento adquirido durante o semestre em um grande projeto em grupo, geralmente pertinente à vida universitária.
        </div>
      </div>

    </main>

    <site-footer/>
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
