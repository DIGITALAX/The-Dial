/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply"],
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        offBlack: "#111313",
        offBlue: "#81A8F8",
        offWhite: "#F2F2F2",
        midGreen: "#09C261",
        midWhite: "#FAF4E8",
        mustard: "#FBEED1",
        midMus: "#FDF3D8",
        heat: "#FBDB86",
        deep: "#0091FF",
        libGray: "#DEDCE1",
        flight: "#F0E7E2",
        viol: "#9DA1F4",
        liBl: "#A3E3F4",
        liOr: "#F9C571",
        liVi: "#C1A8E8",
        offY: "#FEEA66",
        liDa: "#F27A24",
        grayBlue: "#C9D8E4"

      },
      fontFamily: {
        fira: "Fira Regular",
        firaM: "Fira Medium",
        lib: "Liberation Mono",
        libB: "Liberation Mono Bold",
        val: "Valencia",
        coc: "Cochin",
        nex: "Nexus",
        oda: "Odachi"
      },
      keyframes: {
        unblur: {
          "0%": {
            filter: "blur(20)",
          },
          "100%": {
            filter: "blur(0)",
          },
        },
      },
      animation: {
        unblur: "unblur 0.5s linear",
      },
      fontSize: {
        xxs: "0.6rem",
      },
      gridAutoRows: {
        auto: "auto auto",
      },
      gridAutoColumns: {
        auto: "auto auto",
      },
      screens: {
        midi: "1140px",
        half: "900px",
        alm: "740px",
        over: "1490px",
        galaxy: "300px"
      },
    },
  },
  plugins: [],
};
