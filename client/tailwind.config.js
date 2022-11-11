/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NYT: ["Cambria"],
        NYTB: ["Georgia", "comic-sans"],
      },
      minWidth:{
        400 : "400px"
      }
    },
  },
  plugins: [],
};
