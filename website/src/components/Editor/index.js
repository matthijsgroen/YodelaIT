import React, { useEffect } from "react";
import { basicSetup, EditorView } from "codemirror";
// import {javascript} from "@codemirror/lang-javascript"

export const Editor = ({ value, onChange }) => {
  const editorElementRef = React.useRef();
  const editorRef = React.useRef(null);

  React.useEffect(() => {
    const editor = new EditorView({
      doc: value,
      extensions: [
        basicSetup,

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

  return <div ref={editorElementRef}></div>;
};
