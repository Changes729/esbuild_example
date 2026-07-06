import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const external_module = "/app.js";
  const LazyApp = React.lazy(() => import(external_module));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyApp></LazyApp>
    </Suspense>
  );
}

window.onload = () => {
  console.log("[alluvial] App starting...");
  document.title = "Alluvial";

  const node = document.createElement("div");
  document.body.appendChild(node);

  ReactDOM.createRoot(node).render(<App />);
};
