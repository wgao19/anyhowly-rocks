import Typography from "typography";

const AnyhowlyRocksTheme = {
  googleFonts: [
    {
      name: "Raleway",
      styles: ["200", "200i", "300", "300i", "400", "400i", "700", "700i"]
    },
    {
      name: "Yanone Kaffeesatz",
      styles: ["200", "300", "400", "700"]
    }
  ],
  headerFontFamily: ["Yanone Kaffeesatz", "Futura", "sans-serif"],
  bodyFontFamily: ["Raleway", "monospace"],
  overrideStyles: () => ({
    "*": {
      background: "#222",
      color: "#eee"
    }
  })
};

export default new Typography(AnyhowlyRocksTheme);
