<template>
  <div class="container">

    <nav class="navbar">
      <div class="nav-logo">USPCodeLab</div>
      <div class="nav-menu">
        <div v-for="btn in nav_buttons" :key="btn.KEY" class="nav-button">
          <div class="nav-text">{{ btn.text }}</div>
          <div class="nav-line"/>
        </div>
      </div>
    </nav>

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
    </main>

    <footer class="footer">
      <div class="footer-text">a</div>
      <div class="footer-bar"/>
      <div class="footer-btn"/>
    </footer>

  </div>
</template>


<script>
export default {
  data: () => {
    return {
      nav_buttons: [
        { KEY: 1, text: "Home" },
        { KEY: 2, text: "Sobre" },
        { KEY: 3, text: "HackathonUSP" },
        { KEY: 4, text: "dev.journey" },
        { KEY: 5, text: "CodeSchools" },
        { KEY: 6, text: "Contato" }
      ],
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
