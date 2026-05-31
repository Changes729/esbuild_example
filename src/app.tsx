import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <></>;
}

window.onload = () => {
  console.log("[alluvial] App starting...");
  document.title = "Alluvial";

  const node = document.createElement("div");
  document.body.appendChild(node);

  ReactDOM.createRoot(node).render(<App />);
};
