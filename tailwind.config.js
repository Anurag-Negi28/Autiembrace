/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightsteelblue: "#bed8ff",
        gainsboro: "#d9d9d9",
        black: "#000",
        white: "#fff",
        palevioletred: "#ff78a4",
        dimgray: "#534242",
        gray: {
          100: "#21201d",
          200: "rgba(255, 255, 255, 0.79)",
          300: "rgba(255, 255, 255, 0.1)",
          400: "#252836",
          500: "#242730",
        },
        mistyrose: "#ffd1d1",
        cadetblue: "#6f9dac",
        powderblue: {
          100: "#b8d5c3",
          200: "rgba(184, 213, 195, 0.5)",
        },
        mediumaquamarine: "#85dcb2",
        sienna: "#9d4937",
        darkslategray: "#34373c",
        coral: "#ff7551",
        lightsteelblueNew: {
          // renamed from new file
          100: "#bed8ff",
          200: "#b7b9d2",
        },
        mediumseagreen: "#22b07d",
        darkcyan: "#0daabc",
        mediumpurple: "#9369d8",
        lightblue: "#b1e5f6", // new color from incoming file
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "heading-bold-6": "Poppins",
        inherit: "inherit",
        outfit: "Outfit",
      },
      borderRadius: {
        "3xs": "10px",
        "21xl": "40px",
        "31xl": "50px",
        "54xl": "73px",
        "6xs": "7px",
        xl: "20px",
        "81xl": "100px",
        "12xs": "1px",
        "150xl": "169px", // new borderRadius from incoming file
        "35xl": "54px", // new borderRadius from incoming file
      },
    },
    fontSize: {
      lg: "18px",
      "3xl": "22px",
      xl: "20px",
      "5xl": "24px",
      "19xl": "38px",
      base: "16px",
      "41xl": "54px",
      "31xl": "50px",
      "21xl": "40px",
      "6xl": "25px",
      sm: "14px",
      smi: "13px",
      "3xs": "10px",
      "11xl": "30px",
      inherit: "inherit",
      "16xl-1": "35.1px", // new fontSize from incoming file
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
