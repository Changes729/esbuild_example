import markdownit from 'markdown-it'

const app = document.getElementById("app");
// can use `require('markdown-it')` for CJS
const md = markdownit()
const result = md.render(`# markdown-it rulezz!
  hello world! second line.

  ## title 2

  what's next ?
  `);
console.log(result)
app.innerHTML = result
