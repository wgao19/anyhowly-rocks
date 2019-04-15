import Typography from "typography";

const AnyhowlyRocksTheme = {
  googleFonts: [
    {
      name: "Patua One",
      styles: ["400"]
    },
    {
      name: "Gorditas",
      styles: ["400", "700"]
    },
    {
      name: "Open Sans",
      styles: ["400", "400i", "700"]
    }
  ],
  headerFontFamily: ["Patua One", "Futura", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  baseFontSize: "18px",
  scaleRatio: 3,
  overrideStyles: () => ({
    "*": {
      background: "#222",
      color: "#eee"
    }
  })
};

export default new Typography(AnyhowlyRocksTheme);
