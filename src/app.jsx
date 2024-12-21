/* Private include -----------------------------------------------------------*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";

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
