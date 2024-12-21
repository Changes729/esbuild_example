import React from "react";
import { Crepe } from "@milkdown/crepe";
import "@milkdown/crepe/theme/common/style.css";

// We have some themes for you to choose
import "@milkdown/crepe/theme/frame.css";

export default function () {
  const ID = "milkdown-crepe";
  const crepe = new Crepe({
    root: document.getElementById(ID),
    defaultValue: "Hello, Milkdown!",
  });

  crepe.create();
  return <div id={ID}></div>;
}
