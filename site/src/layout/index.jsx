import React, { useState } from "react";
import cx from "classnames";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import Nav from "../components/Nav";
import About from "../components/About";
import ThemeToggle from "../components/ThemeToggle";
import config from "../../data/SiteConfig";
import s from "./s.module.scss";

const THEMES = ["rocks", "rox"];

const localStorage = typeof window !== "undefined" ? window.localStorage : null;

const MainLayout = ({ children }) => {
  const [theme, setTheme] = useState(
    (localStorage && localStorage.getItem("theme")) || THEMES[1]
  );
  const toggleTheme = currentTheme => {
    let preferredTheme;
    try {
      preferredTheme = localStorage && localStorage.getItem("theme");
    } catch (err) {
      console.error(err);
    }
    const newTheme = THEMES[1 - THEMES.indexOf(currentTheme)];
    localStorage && localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <div>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <div className={cx(s.page, theme === "rox" ? s.rox : s.rocks)}>
        <div className={s.container}>
          <h1 className={s.header}>
            <Link to="/">Anyhowly Rocks</Link>
            <ThemeToggle
              theme={theme}
              className={s.toggle}
              onClick={() => toggleTheme(theme)}
            />
          </h1>
          <About />
        </div>
        <div className={s.container}>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
