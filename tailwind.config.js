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
          "100": "#21201d",
          "200": "rgba(255, 255, 255, 0.79)",
          "300": "rgba(255, 255, 255, 0.1)",
        },
        mistyrose: "#ffd1d1",
        cadetblue: "#6f9dac",
        powderblue: {
          "100": "#b8d5c3",
          "200": "rgba(184, 213, 195, 0.5)",
        },
        mediumaquamarine: "#85dcb2",
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
      },
    },
    fontSize: {
      lg: "18px",
      "3xl": "22px",
      xl: "20px",
      "5xl": "24px",
      "19xl": "38px",
      base: "16px",
      "41xl": "60px",
      "31xl": "50px",
      "21xl": "40px",
      "6xl": "25px",
      inherit: "inherit",
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
