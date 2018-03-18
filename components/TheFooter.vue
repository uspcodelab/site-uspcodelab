<template>
  <b-row id="footer" tag="footer" class="footer p-3 p-sm-5 bg-dark text-white">
    <b-col class="footer__about mb-3 mb-sm-0">
      <img src="~/assets/UCL-Logo_Footer.svg" class="footer__about__logo">
      <p class="footer__about__description text-center">
        Criando um espaço colaborativo para o
        desenvolvimento de tecnologia na USP
      </p>
    </b-col>

    <b-col class="footer__social mb-3 mb-sm-0">
      <p class="footer__social__description text-center">
        Encontre-nos nas redes sociais!
      </p>
      <a href="mailto:codelab@ime.usp.br">
        <span class="fa fa-envelope mx-2"/>
      </a>
      <a href="https://facebook.com/uspcodelab/">
        <span class="fa fa-facebook mx-2"/>
      </a>
      <a href="https://github.com/uspcodelab/">
        <span class="fa fa-github mx-2"/>
      </a>
      <a href="https://gitlab.com/uspcodelab/">
        <span class="fa fa-gitlab mx-2"/>
      </a>
    </b-col>
  </b-row>
</template>

<style lang="scss">
.footer {
  color: theme-color("light");
  background-color: theme-color("dark");

  &__about {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    &__logo {
      height: 4rem;
    }
  }

  &__social {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    &__description {
      flex-basis: 100%;
      white-space: nowrap;
    }

    .fa {
      font-size: 1.7rem;

      /* Make the icon inside a circle*/
      height: 3rem;
      width: 3rem;
      border-radius: 50%;

      /* Display icon */
      color: #182c39;
      background-color: white;

      /* Centralize icon in the circle */
      display: flex;
      justify-content: center;
      align-items: center;

      /* Configure transition */
      transition: color 0.2s;
    }

    .fa-envelope:hover {
      color: #00aced;
    }

    .fa-envelope:focus {
      color: #00aced;
    }

    .fa-facebook:hover {
      color: #2b55ff;
    }
    .fa-facebook:focus {
      color: #2b55ff;
    }

    .fa-github:hover {
      color: #24292e;
    }
    .fa-github:focus {
      color: #24292e;
    }

    .fa-gitlab:hover {
      color: #e24329;
    }
    .fa-gitlab:focus {
      color: #e24329;
    }
  }
}
</style>
