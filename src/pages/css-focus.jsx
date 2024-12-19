/** Code from: https://codersblock.com/blog/the-surprising-things-that-css-can-animate/ */
import React from "react";
import "../styles/css-focus.scss"

export default function () {
  let string = `function wall(x, y, width, height) {
  return Matter.Bodies.rectangle(x, y, width, height, {
    chamfer: { radius: 10 }
  });
}`;

  return (
    <div class="wrapper">
      <h1>Here's Your Code Snippet!</h1>
      <p>
        Click below to select all. Click again to clear so you can select a
        portion of the snippet.
      </p>
      <pre>
        <code tabindex="0">{string}</code>
      </pre>
    </div>
  );
}
