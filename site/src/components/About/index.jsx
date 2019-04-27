import React, { Component } from "react";
import Monkey from "../Monkey";
import s from "./s.module.scss";

class About extends Component {
  render() {
    return (
      <p>
        <Monkey />
        <i className={s.about}>Together we monkey.</i>
      </p>
    );
  }
}

export default About;
