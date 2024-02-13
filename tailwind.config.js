/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cadetblue: {
          "100": "#85a38f",
          "200": "#6f9dac",
        },
        gainsboro: "#d9d9d9",
        black: "#000",
        white: "#fff",
        powderblue: {
          "100": "#b8d5c3",
          "200": "rgba(184, 213, 195, 0.5)",
        },
        dimgray: "#534242",
        mediumaquamarine: "#85dcb2",
        mistyrose: "#ffd1d1",
        silver: "#bcbec0",
        palevioletred: "#ff78a4",
        gray: {
          "100": "#21201d",
          "200": "rgba(255, 255, 255, 0.79)",
          "300": "rgba(255, 255, 255, 0.1)",
        },
        lightsteelblue: "#bed8ff",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        inherit: "inherit",
        outfit: "Outfit",
        "heading-bold-6": "Poppins",
      },
      borderRadius: {
        "31xl": "50px",
        "21xl": "40px",
        "3xs": "10px",
      },
    },
    fontSize: {
      lg: "18px",
      "3xl": "22px",
      base: "16px",
      "31xl": "50px",
      "11xl": "30px",
      "21xl": "40px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      xl: "20px",
      "5xl": "24px",
      "13xl": "32px",
      "6xl": "25px",
      sm: "14px",
      "19xl": "38px",
      "4xl": "23px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
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
