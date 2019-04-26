<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script></script>

<style>
@import "assets/styles/tailwind.postcss";

@font-face {
  font-family: Montserrat;
  font-weight: normal;
  src: url("~@/assets/fonts/Montserrat-Medium.otf");
}

html {
  font-size: 14px;
}
@screen md {
  html {
    @apply mt-12;
  }
}
@screen lg {
  html {
    font-size: 16px;
  }
}
@screen xl {
  html {
    font-size: 20px;
  }
}
@screen xxl {
  html {
    font-size: 40px;
  }
}

body {
  font-family: Montserrat, "IBM Plex Sans Condensed";
}

.page {
  color: #f8f9fa;
}

.header {
  @apply h-screen;
  @apply text-ucl-white;
  background-image: linear-gradient(#ff8b46, #ff690a);
}
.header--forward {
  @apply flex flex-row justify-center items-stretch;
}
.header--reverse {
  @apply flex flex-row-reverse justify-center items-stretch;
}

.header--divided {
  @apply flex-wrap;
}
@screen md {
  .header--divided {
    @apply flex-no-wrap;
  }
}

.section {
  @apply text-center;
  @apply px-8 py-20;
  @apply flex flex-wrap flex-row justify-around items-center;
}
@screen md {
  .section {
    @apply px-12;
  }
}
@screen lg {
  .section {
    @apply px-20;
  }
}

.section--light {
  @apply bg-ucl-white;
  @apply text-ucl-black;
}
.section--dark {
  @apply bg-ucl-black;
  @apply text-ucl-white;
}

.section--divided {
  @apply flex-wrap;
}
@screen md {
  .section--divided {
    @apply flex-no-wrap;
  }
}

.column {
  @apply text-center;
}
@screen md {
  .column {
    @apply text-left;
    @apply max-w-xl;
  }
}

.column--spaced {
  @apply py-5 px-8;
}
@screen md {
  .column--spaced {
    @apply py-0 px-12;
  }
}
@screen lg {
  .column--spaced {
    @apply px-20;
  }
}

.divider {
  @apply flex-shrink;
  @apply px-2 py-6;
}
@screen md {
  .divider {
    @apply px-6;
  }
}
@screen lg {
  .divider {
    @apply px-10;
  }
}

.column--info {
  @apply flex flex-col justify-start items-center;
}
@screen md {
  .column--info {
    @apply justify-center items-start;
  }
}

.column--highlight {
  @apply w-full;
  @apply flex flex-col justify-center items-center;
}
@screen md {
  .column--highlight {
    @apply w-1/2;
  }
}

.column--photo {
  @apply w-full;
  @apply flex flex-row justify-center items-center;
}

.column--symbol {
  @apply bg-ucl-white;
  @apply rounded-b-full;
}
@screen md {
  .column--symbol {
    @apply rounded-bl-none rounded-r-full;
  }
}

.logo {
  @apply w-4/5;
  @apply self-end;
}
@screen md {
  .logo {
    @apply self-center;
  }
}

.logo--rounded {
  @apply rounded-full;
}

.banner {
  @apply text-4xl;
  @apply font-bold tracking-wide;
  @apply w-full;
  @apply pb-4;
}

.lead {
  @apply leading-normal;
  @apply text-lg;
}

.title {
  @apply text-ucl-orange;
  @apply text-4xl;
  @apply font-thin tracking-wide;
  @apply w-full;
  @apply pb-4;
}

.tagline {
  @apply text-center;
  @apply text-ucl-white select-none leading-normal pb-4;
}

.description {
  @apply leading-normal;
  @apply pb-4;
}
.description--short {
  @apply text-center;
}
.description--long {
  @apply text-justify;
}

.icon_list {
  @apply list-reset;
  @apply flex flex-wrap justify-center;
}

.icon {
  @apply text-3xl my-2 mr-4;
  transition: color 0.2s;
}
.icon:hover {
  @apply text-ucl-orange;
}
</style>
