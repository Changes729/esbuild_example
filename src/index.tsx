/* Private include -----------------------------------------------------------*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";

/** Views for router */
import Dashboard from "./pages/dashboard/_index.jsx";
import Hello from "./pages/dashboard/hello.jsx";
import World from "./pages/dashboard/word.jsx";

/* Private class function ----------------------------------------------------*/
function App() {
  onload = () => { useNavigate()(document.location.pathname) };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />}>
          <Route index element={<Hello />} />
          <Route path="hello" element={<Hello />} />
          <Route path="world" element={<World />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

/** Main Start */
window.onload = () => {
  let node = document.createElement("div");
  document.body.appendChild(node)
  ReactDOM.createRoot(node).render(<App />);
};
