import React from "react";
import { basicSetup, EditorView } from "codemirror";
// import {javascript} from "@codemirror/lang-javascript"

export const Editor = ({ initialValue, onChange }) => {
  const editorRef = React.useRef();

  React.useEffect(() => {
    const editor = new EditorView({
      doc: initialValue,
      extensions: [
        basicSetup,

        EditorView.updateListener.of((v) => {
          if (v.docChanged) {
            const text = v.state.doc.toString();
            onChange(text);
          }
        }),
      ],
      parent: editorRef.current,
    });

    return () => {
      editor.destroy();
    };
  }, [editorRef.current]);

  return <div ref={editorRef}></div>;
};
