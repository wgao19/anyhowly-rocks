import * as React from "react";
import cx from "classnames";
import { Link } from "gatsby";
import s from "./s.module.scss";

export default () => (
  <React.Fragment>
    <Link to="/about" className={s.navLink}>
      about
    </Link>
  </React.Fragment>
);
