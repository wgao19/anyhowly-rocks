import React, { useState } from "react";
import cx from "classnames";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import ThemeToggle from "../components/ThemeToggle";
import config from "../../data/SiteConfig";
import s from "./styles.module.scss";

const themeFromLocalStorage = localStorage.getItem("theme") || "rox";
const THEMES = ["rocks", "rox"];

const MainLayout = ({ children }) => {
  const [theme, setTheme] = useState(themeFromLocalStorage);
  const toggleTheme = currentTheme => {
    let preferredTheme;
    try {
      preferredTheme = localStorage.getItem("theme");
    } catch (err) {
      console.error(err);
    }
    const newTheme = THEMES[1 - THEMES.indexOf(currentTheme)];
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <div>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <div className={cx(s.container, theme === "rox" ? s.rox : s.rocks)}>
        <div className={s.navbar}>
          <Nav />
          <ThemeToggle
            theme={theme}
            className={s.toggle}
            onClick={() => toggleTheme(theme)}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
