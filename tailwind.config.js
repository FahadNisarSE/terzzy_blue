// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgray: '#8B8B8B',
        darkred: '#ED0000'
      },
      screens: {
        custom: '1294px',
        customsm: '666px',
        xxs: '350px'
      },
      rotate: {
        '25': '25deg'
      }
    },
  },
  plugins: [],
};
