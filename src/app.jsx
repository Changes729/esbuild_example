/* Private include -----------------------------------------------------------*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import "@/app.scss";

/* Private class function ----------------------------------------------------*/
function LiangZhu_weekly(children) {
  return <div>hello world</div>;
}

function App() {
  onload = () => {
    useNavigate()(document.location.pathname);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LiangZhu_weekly />} />
      </Routes>
    </BrowserRouter>
  );
}

/** Main Start */
window.onload = () => {
  let shortcut_icon = document.createElement("link");
  shortcut_icon.rel = "shortcut icon";
  shortcut_icon.href = "https://s1.music.126.net/style/favicon.ico?v20180823";
  document.head.appendChild(shortcut_icon);

  document.title = "网易云音乐";


  let node = document.createElement("div");
  document.body.appendChild(node);
  ReactDOM.createRoot(node).render(<App />);
};
