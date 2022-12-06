module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "eslint:recommended",
    "plugin:vue/recommended",
    "prettier"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    "vue/max-attributes-per-line": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "off",
    "no-unused-vars": "off",
  }
};
