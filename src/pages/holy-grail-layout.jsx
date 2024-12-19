/** Code from: https://www.geeksforgeeks.org/holy-grail-layout-with-css-grid/ */
import React from "react";
import "../styles/holy-grail-layout.scss"

export default function () {
  scss = {};

  return (
    <div class="parent">
      <header>This is header</header>
      <div class="left-sidebar">I am left sidebar</div>
      <main>I am main content</main>
      <div class="right-sidebar">
        I am right sidebar and I am having more text
      </div>
      <footer>I am footer</footer>
    </div>
  );
}
