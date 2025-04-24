/* Private include -----------------------------------------------------------*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";

/** Views for router */
import { default as AspectBox } from "./pages/aspect-box";
import { default as BurgerMenu } from "./pages/burger-menu";
import { default as CssTimeline } from "./pages/css-timeline";
import { default as ExcalidrawEmbed } from "./pages/excalidraw-embed/index";
import { default as MarkdownExample } from "./pages/markdown";
import { default as SvgClick } from "./pages/svg-element-onclick";
import { default as CssFocus } from "./pages/css-focus";
import { default as CssShadowsShift } from "./pages/css-color-shadows";
import { default as HolyGrailLayout } from "./pages/holy-grail-layout";
import { default as Milkdown } from "./pages/milkdown-crepe";
import { default as P5 } from "./pages/p5";
import FileSystemTest from "./pages/filesystem";

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
        <Route path="aspect-box" element={<AspectBox />} />
        <Route path="burger-menu" element={<BurgerMenu />} />
        <Route path="css-timeline" element={<CssTimeline />} />
        <Route path="css-focus" element={<CssFocus />} />
        <Route path="css-shadow-shift" element={<CssShadowsShift />} />
        <Route path="excalidraw-embed" element={<ExcalidrawEmbed />} />
        <Route path="markdown" element={<MarkdownExample />} />
        <Route path="milkdown" element={<Milkdown />} />
        <Route
          path="pdf-dym"
          element={
            <iframe src="/static/Generative Agents- Interactive Simulacra of Human Behavior.pdf"></iframe>
          }
        />
        <Route path="svg-click" element={<SvgClick />} />
        <Route path="holy-grail-layout" element={<HolyGrailLayout />} />
        <Route path="file-system" element={<FileSystemTest />} />
        <Route path="p5" element={<P5 />} />
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
