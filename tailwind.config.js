/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            "ucl-orange-dark": "#ca4e00" /* CUSTOM */,
            "ucl-orange": "#ff690a" /* CUSTOM */,
            "ucl-orange-light": "#ff883e" /* CUSTOM */,

            "ucl-black": "#292827" /* CUSTOM */,
            "ucl-grey": "#666361" /* CUSTOM */,
            "ucl-grey-light": "dde4e9" /* CUSTOM */,
            "ucl-white": "#f8f9fa" /* CUSTOM */
        },
        extend: {},
        textSizes: {
            "2xs": ".6rem" /* CUSTOM */,
        },
    },
    plugins: [],
    // corePlugins: ['container']
}