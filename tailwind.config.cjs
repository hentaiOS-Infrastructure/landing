const plugin = require("tailwindcss/plugin");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        hero: "0 0 25px 0"
      },
      colors: {
        cold: {
          DEFAULT: "#bad8ff",
          dark: "#68aaff"
        },
        hosPink: "#d30f54",
        hosGold: "#D19D69",
        portalBg: "#131313"
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("active", "&.navbar-item-active");
    }),
  ],
};
