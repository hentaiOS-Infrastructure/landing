const plugin = require("tailwindcss/plugin");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        hero: "0 0 25px 0",
        material: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);"
      },
      colors: {
        cold: {
          DEFAULT: "#bad8ff",
          dark: "#68aaff"
        },
        hosPink: "#d30f54",
        hosGold: "#D19D69",
        portalBg: "#131313",
        mediumvioletred: "#da2d89",
        darkslategray: "#073042",
        burlywood: "#e4ca93",
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("active", "&.navbar-item-active");
    }),
  ],
};
