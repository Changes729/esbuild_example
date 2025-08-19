/* Private include -----------------------------------------------------------*/
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { useRoutes, useNavigate, HashRouter, Link } from "react-router";
import { Provider } from "react-redux";

import store, { useAppSelector } from "./base/store";
import routes from "./base/router";
import "@/app.scss";

/* Private class function ----------------------------------------------------*/

function App() {
  onload = () => {
    useNavigate()(document.location.pathname);
  };

  const { value } = useAppSelector((state) => ({
    value: state.counter.value,
  }));

  return (
    <>
      <div className="navigate">
        <Link to="/">首页</Link>
        <Link to="/home">主页</Link>
        <Link to="/download">下载</Link>
        <Link to="/focus">聚焦</Link>
        <Link to="/discover">发现</Link>
      </div>
      <h2> current count: {value}</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <div>{useRoutes(routes)}</div>
      </Suspense>
    </>
  );
}

/** Main Start */
window.onload = () => {
  console.log("App start");
  let shortcut_icon = document.createElement("link");
  shortcut_icon.rel = "shortcut icon";
  shortcut_icon.href = "https://s1.music.126.net/style/favicon.ico?v20180823";
  document.head.appendChild(shortcut_icon);

  document.title = "网易云音乐";

  let node = document.createElement("div");
  document.body.appendChild(node);
  ReactDOM.createRoot(node).render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
};
