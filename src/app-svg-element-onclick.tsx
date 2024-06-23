import * as ReactDOM from "react-dom";
import * as React from "react";
import svg from "../public/static/pure_test.svg"

const app = document.getElementById("app");

console.log(svg);

app!.innerHTML = svg

let circle_1 = document.getElementById("path1")
let circle_2 = document.getElementById("path1-9")

circle_1!.onclick = () => {
  console.log("click 1")
}

circle_2!.onclick = () => {
  console.log("click 2")
}