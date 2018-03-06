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
        <div class="section-title">
          <h3>HackathonUSP</h3>
        </div>
        <div class="hackathon-usp-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus aut accusamus hic architecto sapiente tempore deserunt eos, veniam incidunt, aliquam temporibus error, odit laudantium laboriosam quia dignissimos ab ullam.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur commodi, reiciendis explicabo laudantium necessitatibus expedita ipsa in, eum sequi voluptas architecto placeat cupiditate, saepe omnis facere dignissimos provident minus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, sunt impedit ab maiores, animi qui ut dolorum quis optio cumque iusto magni fuga tempore similique. Maiores id expedita perferendis repudiandae?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi totam doloribus mollitia rem eos facere, commodi animi! Quae eveniet ad, omnis suscipit doloribus quidem iusto, quod eligendi eaque adipisci aliquam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officia suscipit blanditiis culpa alias vel est, eum dolor, eaque, dicta debitis aspernatur aliquid sit exercitationem. Commodi possimus eveniet magnam modi?
        </div>
        <div class="hackathon-logo">
          Logo placeholder
        </div>
      </div>

      <div class="codeschools">
        <div class="section-title">
          <h3>Code Schoools</h3>
        </div>

        <div class="codeschools-photos">
          Photo gallery placeholder
        </div>

        <div class="codeschools-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus aut accusamus hic architecto sapiente tempore deserunt eos, veniam incidunt, aliquam temporibus error, odit laudantium laboriosam quia dignissimos ab ullam.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur commodi, reiciendis explicabo laudantium necessitatibus expedita ipsa in, eum sequi voluptas architecto placeat cupiditate, saepe omnis facere dignissimos provident minus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, sunt impedit ab maiores, animi qui ut dolorum quis optio cumque iusto magni fuga tempore similique. Maiores id expedita perferendis repudiandae?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi totam doloribus mollitia rem eos facere, commodi animi! Quae eveniet ad, omnis suscipit doloribus quidem iusto, quod eligendi eaque adipisci aliquam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officia suscipit blanditiis culpa alias vel est, eum dolor, eaque, dicta debitis aspernatur aliquid sit exercitationem. Commodi possimus eveniet magnam modi?
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
