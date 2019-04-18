import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Intro from "../components/Intro";
import config from "../../data/SiteConfig";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <h1>
          <Link to="/">{config.siteTitle}</Link>
        </h1>
        <Intro meta={config} />
        {children}
      </div>
    );
  }
}
