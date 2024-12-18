/* Private include -----------------------------------------------------------*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";

/** Views for router */
import Aspect_box from "./pages/aspect-box";

/* Private class function ----------------------------------------------------*/
function Hello() {
  return <div>"Hello world"</div>;
}

function App() {
  onload = () => {
    useNavigate()(document.location.pathname);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Hello />} />
        <Route path="AspectBox" element={<Aspect_box />} />
      </Routes>
    </BrowserRouter>
  );
}

/** Main Start */
window.onload = () => {
  let node = document.createElement("div");
  document.body.appendChild(node);
  ReactDOM.createRoot(node).render(<App />);
};
