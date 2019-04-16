import Typography from "typography";

const headerFontFamily = ["Gorditas", "Patua One", "Futura", "sans-serif"];
const bodyFontFamily = ["Gamja Flower", "Open Sans", "sans-serif"];
const AnyhowlyRocksTheme = {
  googleFonts: [
    {
      name: "Gamja Flower",
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
      name: "Open Sans",
      styles: ["400", "400i", "700"]
    }
  ],
  headerFontFamily,
  bodyFontFamily,
  baseFontSize: "24px",
  scaleRatio: 2,
  overrideStyles: () => ({
    ":root": {
      background: "#222"
    },
    "*": {
      color: "#eee",
      fontFamily: ["var(--body-font-family)", ...bodyFontFamily].join(","),
      fontSize: "var(--body-font-size)",
      lineHeight: "24px"
    },
    "h1,h2,h3,h4,h5,h6": {
      fontFamily: ["var(--header-font-family)", ...headerFontFamily].join(",")
    },
    a: {
      textDecoration: "none"
    }
  })
};

export default new Typography(AnyhowlyRocksTheme);
