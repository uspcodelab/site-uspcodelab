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
        <h1 class="title">Header Content</h1>
        <div class="logo"/>
    </header>


    <div class="info-section">
      <div class="info-title">
        O que oferecemos
      </div>

      <div v-for="info in infos" :key="info.KEY" class="info">
        <div class="info-text">
          {{ info.text }}
        </div>
      </div>

      <div class="photo-menu">
        <div class="photo-menu-entry">
          <img src="../images/blue-glass.jpg">
        </div>
        <div class="photo-menu-entry">
          <img src="../images/green-glass.jpg">
        </div>
        <div class="photo-menu-entry">
          <img src="../images/blue-glass.jpg">
        </div>
        <div class="photo-menu-entry">
          <img src="../images/green-glass.jpg">
        </div>
      </div>

      <footer>
        <div class="footer-info">a</div>
        <div class="footer-copyright">b</div>
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
      infos: [
        { KEY: 1,
          text: "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"},
        { KEY: 2,
          text: "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"},
        { KEY: 3,
          text: "Elit nisi consequuntur dolores tempore error! Voluptate aspernatur repellat minima molestias nostrum? Distinctio ullam neque voluptas quasi maiores. Officia laboriosam possimus in aspernatur tempore Provident reprehenderit excepturi voluptates quidem blanditiis?"},

      ]
    };
  }
};
</script>
