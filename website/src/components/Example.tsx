import CodeBlock from "@theme/CodeBlock";
import CodeLine from "@theme/MDXComponents/Code";
import React, { PropsWithChildren } from "react";
import { urlToEditor } from "./base64";

const childrenToCode = (children: React.ReactNode): string =>
  (children?.toString() ?? "")
    .trim()
    .split("\n")
    .map((l) => (l === "'" ? "" : l))
    .join("\n");

export const Example: React.FC<PropsWithChildren> = ({ children }) => {
  const code = childrenToCode(children);
  return (
    <div style={{ position: "relative" }}>
      <CodeBlock>{code}</CodeBlock>
      <button
        onClick={() => {
          const url = urlToEditor(code);
          document.location.href = url.toString();
        }}
        style={{ position: "absolute", bottom: 0, right: 0 }}
      >
        Probeer uit ▶︎
      </button>
    </div>
  );
};

export const LineExample: React.FC<PropsWithChildren> = ({ children }) => {
  const code = childrenToCode(children);
  return (
    <span>
      <CodeLine>{code}</CodeLine>
      <button
        onClick={() => {
          const url = urlToEditor(code);
          document.location.href = url.toString();
        }}
      >
        ▶︎
      </button>
    </span>
  );
};
