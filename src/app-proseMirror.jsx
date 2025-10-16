import { EditorView } from "prosemirror-view";
import { EditorState } from "prosemirror-state";
import {
  schema,
  defaultMarkdownParser,
  defaultMarkdownSerializer,
} from "prosemirror-markdown";

import "./styles/editor.scss";
import "./styles/site.scss";
import { buildInputRules } from "prosemirror-example-setup";
import { keymap } from "prosemirror-keymap";
import { buildKeymap } from "prosemirror-example-setup";
import { dropCursor } from "prosemirror-dropcursor";
import { gapCursor } from "prosemirror-gapcursor";
import { baseKeymap } from "prosemirror-commands";
import { menuBar } from "prosemirror-menu";
import { buildMenuItems } from "prosemirror-example-setup";
import { history } from "prosemirror-history";
import { Plugin } from "prosemirror-state";

function exampleSetup(options) {
  console.log(options, options.menuBar, options.history);
  let plugins = [
    buildInputRules(options.schema),
    keymap(buildKeymap(options.schema, options.mapKeys)),
    keymap(baseKeymap),
    dropCursor(),
    gapCursor(),
  ];
  if (options.menuBar !== false)
    plugins.push(
      menuBar({
        floating: options.floatingMenu !== false,
        content: options.menuContent || buildMenuItems(options.schema).fullMenu,
      })
    );
  if (options.history !== false) plugins.push(history());
  return plugins.concat(
    new Plugin({
      props: {
        attributes: { class: "ProseMirror-example-setup-style" },
      },
    })
  );
}

class MarkdownView {
  constructor(target, content) {
    this.textarea = target.appendChild(document.createElement("textarea"));
    this.textarea.value = content;
  }

  get content() {
    return this.textarea.value;
  }
  focus() {
    this.textarea.focus();
  }
  destroy() {
    this.textarea.remove();
  }
}
class ProseMirrorView {
  constructor(target, content) {
    let doc = schema.node("doc", null, [
      schema.node("doc", null, [
        schema.node("paragraph", null, [schema.text("One.")]),
      ]),
      schema.node("doc", null, [
        schema.node("paragraph", null, [schema.text("One.")]),
      ]),
    ]);
    this.view = new EditorView(target, {
      state: EditorState.create({
        doc: doc,
        plugins: exampleSetup({ schema }),
      }),
      editable() {
        return true;
      },
    });
  }

  get content() {
    return defaultMarkdownSerializer.serialize(this.view.state.doc);
  }
  focus() {
    this.view.focus();
  }
  destroy() {
    this.view.destroy();
  }
}

let place = document.querySelector("#editor");
let view = new MarkdownView(place, document.querySelector("#content").value);

document.querySelectorAll("input[type=radio]").forEach((button) => {
  button.addEventListener("change", () => {
    if (!button.checked) return;
    let View = button.value == "markdown" ? MarkdownView : ProseMirrorView;
    if (view instanceof View) return;
    let content = view.content;
    view.destroy();
    view = new View(place, content);
    view.focus();
  });
});
