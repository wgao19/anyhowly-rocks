import Typography from "typography";

const bodyFontFamily = ["Comfortaa", "serif"];
const headerFontFamily = ["Open Sans", "sans-serif"];
const AnyhowlyRocksTheme = {
  googleFonts: [
    {
      name: "Bevan",
      styles: ["400"]
    },

    {
      name: "Comfortaa",
      styles: ["300", "400", "700"]
    },
    {
      name: "Gorditas",
      styles: ["400", "700"]
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
    "h1,h2,h3,h4,h5,h6": {
      color: "var(--highlight-color)",
      fontFamily: ["var(--header-font-family)", ...headerFontFamily].join(",")
    },
    "h1 a, h2 a, h3 a, h4 a, h5 a, h6 a": {
      textDecoration: "none"
    },
    a: {
      color: "inherit"
    },
    p: {
      fontWeight: "var(--font-weight)"
    },
    "p em, p strong": {
      color: "var(--highlight-color)"
    }
  })
};

export default new Typography(AnyhowlyRocksTheme);
