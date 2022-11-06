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
        cold: "#bad8ff",
        hosPink: "#d30f54"
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("active", "&.navbar-item-active");
    }),
  ],
};
