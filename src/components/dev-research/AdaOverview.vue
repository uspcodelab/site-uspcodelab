<template>
  <section class="section section--dark section--divided">
    <div class="column column--info">
      <h1 class="title">
        Projeto ADA
      </h1>
      <p class="description description--long" >
        O Projeto A.D.A. (Assistente Distribuída Avançada) é um projeto de pesquisa sendo
        divulgado pelo dev.research(). Tratam-se de vários subprojetos de iniciação científica para
        contruir um assistente virtual com software livre e foco no público lusófono.
        </p>
      <p class="description description--long" >
        Os subtemas das iniciações são:
      </p>
    <ul>
        <li>Processamento de voz e linguagem natural</li>
        <li>Interação Humano-Computador</li>
        <li>Compilação e Interpretação</li>
        <li>Internet das Coisas</li>
        <li>Microservices e DevOps</li>
    </ul>
    <p class="description description--long">  </p>
    <p class="description description--long">
        Você pode acompanhar o que está acontecendo <a href="https://uclab.xyz/ada"> aqui. </a>
    </p>
    </div>
    <div class="divider" />
    <div class="column column--photo">
      <img
        src=@/assets/dev-research/ada_lovelace.jpeg
        alt="Ada Picture"
        class="rounded-full  h-128 w-128"
      />
    </div>
  </section>
</template>

<script>

import AdaLovelace from "@/assets/dev-research/ada_lovelace.jpeg";

export default {
  data() {
    return {
      devCampList,
      AdaLovelace
    };
  },
  computed: {
    lastDevCamp() {
      return this.devCampList[0];
    }
  }
};
</script>
