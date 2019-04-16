import * as React from "react";

export default () => (
  <span>{["🐒", "🙈", "🙉", "🙊", "🐵"][Math.floor(Math.random() * 5)]}</span>
);
