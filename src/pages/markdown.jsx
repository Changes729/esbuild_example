import React from "react";
import markdownit from "markdown-it";

const md = markdownit();
const result = md.render(`# markdown-it rulezz!
hello world! second line.

## title 2

what's next ?
`);
console.log(result);

export default function () {
  // can use `require('markdown-it')` for CJS
  return (
    <div contenteditable="true" dangerouslySetInnerHTML={{ __html: result }} />
  );
}
