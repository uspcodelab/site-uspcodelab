module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 3
            }
          }
        }
      })
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@/assets/styles/variables.scss";
        `
      }
    }
  }
};
