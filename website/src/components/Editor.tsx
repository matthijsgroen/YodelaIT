import React, { useEffect } from "react";
import { basicSetup, EditorView } from "codemirror";
import { linter, Diagnostic, lintGutter } from "@codemirror/lint";
import { parser } from "levenslied";

type Expected =
  | { type: "other"; description: string }
  | { type: "literal"; text: string }
  | { type: "class"; parts: string[][] };

const expectedToString = (expected: Expected): string => {
  if (expected.type === "other") {
    return expected.description;
  }
  if (expected.type === "literal") {
    return expected.text;
  }
  return expected.parts.map((item) => item.join("-")).join(", ");
};

const dutchErrorMessage = (e: { found: null | string; expected: Expected[] }) =>
  `Verwachte: ${e.expected
    .map(expectedToString)
    .filter((item, i, l) => l.indexOf(item) === i)
    .join(", ")}, maar vond: ${
    e.found === null ? "eind van code" : '"' + e.found + '"'
  }`;

const levensliedLinter = linter((view) => {
  const result: Diagnostic[] = [];
  let parsedText = null;

  const text = view.state.doc.toString();
  try {
    parsedText = parser.parse(text, { grammarSource: "probeer.leven" });
  } catch (e) {
    if (typeof e.format === "function") {
      const pos = text
        .split("\n")
        .slice(0, e.location.start.line - 1)
        .join("\n").length;

      console.log(e.expected);
      const message = dutchErrorMessage(e);
      result.push({
        from: pos + 1,
        to: e.location.end.offset,
        severity: "error",
        message,
        actions: [],
      });
    }
  }

  return result;
});

export const Editor = ({ value, onChange }) => {
  const editorElementRef = React.useRef<HTMLDivElement>(null);
  const editorRef = React.useRef<EditorView | null>(null);

  React.useEffect(() => {
    if (!editorElementRef.current) return;

    const editor = new EditorView({
      doc: value,
      extensions: [
        basicSetup,
        levensliedLinter,
        EditorView.lineWrapping,
        lintGutter(),
        EditorView.updateListener.of((v) => {
          if (v.docChanged) {
            const text = v.state.doc.toString();
            onChange(text);
          }
        }),
      ],
      parent: editorElementRef.current,
    });
    editorRef.current = editor;

    return () => {
      editor.destroy();
    };
  }, [editorElementRef.current]);

  useEffect(() => {
    if (editorRef.current && editorRef.current.state.doc.toString() !== value) {
      editorRef.current.dispatch({
        changes: {
          from: 0,
          to: editorRef.current.state.doc.length,
          insert: value,
        },
      });
    }
  }, [value]);

  return <div ref={editorElementRef} style={{ maxWidth: "95vw" }}></div>;
};
