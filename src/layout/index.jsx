import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import config from "../../data/SiteConfig";
import s from "./styles.module.scss";

const MainLayout = ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    <div className={s.container}>
      <Nav />
      {children}
    </div>
  </div>
);

export default MainLayout;
