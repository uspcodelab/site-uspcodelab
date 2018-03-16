const pkg = require("./package");

module.exports = {
  mode: "spa",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Cabin|IBM+Plex+Sans+Condensed|Nunito|Open+Sans"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#FF690A" },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["~plugins/vue-scrollto.js"],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/font-awesome",
    "nuxt-sass-resources-loader",
    "bootstrap-vue/nuxt"
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      const vueLoader = config.module.rules.find(
        rule => rule.loader === "vue-loader"
      );
      vueLoader.options.transformToRequire = {
        img: "src",
        image: "xlink:href",
        "b-img": "src",
        "b-img-lazy": ["src", "blank-src"],
        "b-card": "img-src",
        "b-card-img": "img-src",
        "b-carousel-slide": "img-src",
        "b-embed": "src"
      };
    }
  },

  sassResources: ["~/assets/variables.scss"]
};
