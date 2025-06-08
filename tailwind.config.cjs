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
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("active", "&.navbar-item-active");
    }),
  ],
};
