/* Private include -----------------------------------------------------------*/
import React from "react";
import ReactDOM from "react-dom/client";
import { useRoutes, useNavigate, HashRouter } from "react-router";
import routes from "./base/router";
import "@/app.scss";

/* Private class function ----------------------------------------------------*/
function App() {
  onload = () => {
    useNavigate()(document.location.pathname);
  };

  return <div>{useRoutes(routes)}</div>;
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
  ReactDOM.createRoot(node).render(
    <HashRouter>
      <App />
    </HashRouter>
  );
};
