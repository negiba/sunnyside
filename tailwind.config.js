module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      serif: ["Fraunces", "serif"],
    },
    extend: {
      width: {
        '72': '18rem',
        '84': '21rem',
        '96': '25rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
