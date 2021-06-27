module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: {
      current: "currentColor",
    },
    backgroundColor: {
      grayish: "hsl(26, 100%, 99%)",
      darkblue: "hsl(198, 62%, 26%)",
      footer: "hsl(167, 44%, 70%)",
    },
    textColor: {
      darkblue: "hsl(198, 62%, 26%)",
      darkcyan: "hsl(167, 40%, 24%)",
      darkgrayblue: "hsl(213, 9%, 39%)",
      grayishblue: "hsl(210, 4%, 67%)",
      footer: "hsl(168, 34%, 41%)",
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      softred: "hsl(7, 99%, 70%)",
      softyellow: "hsl(51, 100%, 49%)",
    }),
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      serif: ["Fraunces", "serif"],
    },
    extend: {
      width: {
        72: "18rem",
        84: "21rem",
        96: "25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
