module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extends: {
      screens: {
        max_2xl: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        max_xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        max_lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        max_md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        max_sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        max_xsm: { max: "500px" },
        // => @media (max-width: 500px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
