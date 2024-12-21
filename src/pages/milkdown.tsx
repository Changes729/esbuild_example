import React from "react";
import {
  defaultValueCtx,
  Editor,
} from "@milkdown/kit/core";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/kit/preset/commonmark";
import { history } from "@milkdown/kit/plugin/history";
import "@milkdown/crepe/theme/common/style.css";
import { indent, indentConfig } from "@milkdown/kit/plugin/indent";
import { trailing } from "@milkdown/kit/plugin/trailing";
import { clipboard } from "@milkdown/kit/plugin/clipboard";
import { gfm } from "@milkdown/kit/preset/gfm";

// We have some themes for you to choose
// available themes: frame, classic, nord, frame-dark, classic-dark, nord-dark
import "@milkdown/crepe/theme/frame.css";

function MilkdownEditor() {
  const { get } = useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(defaultValueCtx, "hello world");
        ctx.update(indentConfig.key, (value) => ({
          ...value,
          size: 4,
        }));
      })
      .use(commonmark)
      .use(history)
      .use(indent)
      .use(trailing)
      .use(clipboard)
      .use(gfm)
  );

  return <Milkdown />;
}

export default function () {
  return (
    <MilkdownProvider>
      <MilkdownEditor />
    </MilkdownProvider>
  );
}
