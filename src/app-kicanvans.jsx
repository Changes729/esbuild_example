import * as ReactDOM from "react-dom";
import * as React from "react";
import "../public/js/kicavans";

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(
  <kicanvas-embed src="/static/ESP_Audio_Player.kicad_pcb" controls="basic"></kicanvas-embed>
);
