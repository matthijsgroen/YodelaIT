import "@kabisa/ui-components/index.css";
import CodeBlock from "@theme/CodeBlock";
import CodeLine from "@theme/MDXComponents/Code";
import React, { PropsWithChildren } from "react";
import { urlToEditor } from "../base64";
import { Button } from "@kabisa/ui-components";
import styles from "./styles.module.css";
import classnames from "classnames";

const childrenToCode = (children: React.ReactNode): string =>
  (children?.toString() ?? "")
    .trim()
    .split("\n")
    .map((l) => (l === "'" ? "" : l))
    .join("\n");

export const Example: React.FC<PropsWithChildren> = ({ children }) => {
  const code = childrenToCode(children);

  const onClick = () => {
    const url = urlToEditor(code);
    document.location.href = url.toString();
  };

  return (
    <div className={classnames(styles.example)}>
      <CodeBlock>{code}</CodeBlock>
      <Button
        variant="tertiary"
        className={styles.blockButton}
        onClick={onClick}
      >
        Probeer uit ▶︎
      </Button>
    </div>
  );
};

export const LineExample: React.FC<PropsWithChildren> = ({ children }) => {
  const code = childrenToCode(children);
  const onClick = () => {
    const url = urlToEditor(code);
    document.location.href = url.toString();
  };
  return (
    <span className={classnames(styles.example)}>
      <CodeLine>{code}</CodeLine>
      <Button
        className={styles.inlineButton}
        variant="tertiary"
        onClick={onClick}
      >
        ▶︎
      </Button>
    </span>
  );
};
