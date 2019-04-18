import Typography from "typography";

const bodyFontFamily = ["Zilla Slab", "serif"];
const headerFontFamily = ["Open Sans", "sans-serif"];
const AnyhowlyRocksTheme = {
  googleFonts: [
    {
      name: "Bevan",
      styles: ["400"]
    },

    {
      name: "Patua One",
      styles: ["400", "700"]
    },
    {
      name: "Gorditas",
      styles: ["400", "700"]
    },
    {
      name: "Zilla Slab",
      styles: ["400", "400i", "700", "700i"]
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
    ":root": {
      background: "#222"
    },
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
    "h3,h4,h5,h6": {
      fontFamily: ["var(--body-font-family)", ...headerFontFamily].join(",")
    },
    "h1 a, h2 a, h3 a, h4 a, h5 a, h6 a": {
      textDecoration: "none"
    },
    a: {
      color: "inherit"
    }
  })
};

export default new Typography(AnyhowlyRocksTheme);
