module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#FF4C06",
      white: "#ffffff",
      softWhite: "#F2F2F2",
      black: "#000000",
      softBlack: "#1A1A1A",
      active: "#AACCEE",
      backdrop: "#F2F2F2",
      fontHead: "#666666",
      softgray: "#CCCCCC",
      softblue: "#3399FF",
      purple: "#A623EF",
      red: "#F50000",
      bgModal: "rgb(0, 0, 0, 0.5)",
    },
    maxHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    extend: {
      width: {
        128: "128px",
        39: "39px",
        220: "220px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
