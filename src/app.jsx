import * as ReactDOM from "react-dom";
import * as React from "react";

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

const func = async () => {
  const response = await window.api.hello();
  console.log(response); // 打印 'pong'

  setInterval(() => {
    window.api.getPosition();
  }, 100);
};

func();

root.render(
  <>
    <h1>Develop. Preview. Ship.</h1>
    {/* versions undefined when env is not electron. */}
    本应用正在使用 Chrome (v{versions.chrome()}), Node.js (v{versions.node()}
    ), 和 Electron (v{versions.electron()})<br />
  </>
);
