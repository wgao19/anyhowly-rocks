import React, { useState } from "react";
import cx from "classnames";
import s from "./s.module.scss";

function ThemeToggle({ theme, className, onClick }) {
  return (
    <div className={cx(className, s.themeToggle)} onClick={onClick}>
      {theme}
    </div>
  );
}

export default ThemeToggle;
