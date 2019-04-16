import Typography from "typography";

const bodyFontFamily = ["Open Sans", "sans-serif"];
const headerFontFamily = ["Open Sans", "sans-serif"];
const AnyhowlyRocksTheme = {
  googleFonts: [
    {
      name: "Bevan",
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
  headerFontFamily,
  bodyFontFamily,
  baseFontSize: "18px",
  scaleRatio: 2,
  overrideStyles: () => ({
    "*": {
      fontFamily: ["var(--body-font-family)", ...bodyFontFamily].join(","),
      fontSize: "var(--body-font-size)"
    },
    body: {
      padding: 0,
      margin: 0
    },
    "h1,h2": {
      color: "var(--highlight-color)",
      fontFamily: ["var(--header-font-family)", ...headerFontFamily].join(",")
    },
    a: {
      textDecoration: "none",
      color: "inherit"
    }
  })
};

export default new Typography(AnyhowlyRocksTheme);
