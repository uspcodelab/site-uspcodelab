<template>
  <b-row id="footer" tag="footer" class="footer px-3 py-5 px-sm-5 bg-dark text-white">
    <b-col class="footer__about pb-3 pb-sm-0">
      <img src="@/assets/logos/ucl-logo-wb-alpha.svg" class="footer__about__logo">
      <p class="footer__about__description text-center">
        Estimulando a inovação tecnológica na USP
      </p>
    </b-col>

    <b-col class="footer__social">
      <p class="footer__social__description text-center">
        Encontre-nos nas redes sociais!
      </p>
      <a href="http://uclab.xyz/facebook">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
      </a>
      <a href="http://uclab.xyz/github">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }"/>
        <!-- <span class="fa fa-github mx-2"/> -->
      </a>
      <a href="http://uclab.xyz/gitlab">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'gitlab' }"/>
      </a>
      <a href="http://uclab.xyz/telegram">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'telegram' }"/>
      </a>
      <a href="http://uclab.xyz/medium">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'medium' }"/>
      </a>
      <a href="mailto:codelab@ime.usp.br">
        <font-awesome-icon icon="envelope" />
      </a>
    </b-col>
  </b-row>
</template>

<style lang="scss">
a:hover {
  text-decoration: none;
}

.footer {
  color: $ucl-light;
  background-color: $ucl-black;

  &__about {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    &__logo {
      height: 4rem;
    }

    &__description {
      max-width: 24rem;
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

    svg {
      font-size: 3rem !important;
      margin: .2rem;
      padding: .5rem;

      /* Make the icon inside a circle*/
      height: 3rem;
      width: 3rem !important;
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

    .fa-telegram:hover {
      color: #1f95d3;
    }
    .fa-telegram:focus {
      color: #1f95d3;
    }

    .fa-gitlab:hover {
      color: #e24329;
    }
    .fa-gitlab:focus {
      color: #e24329;
    }

    .fa-medium:hover {
      color: #02b875;
    }
    .fa-medium:focus {
      color: #02b875;
    }

    .fa-github:hover {
      color: #bfbfbf;
    }
    .fa-github:focus {
      color: #bfbfbf;
    }
  }
}
</style>
