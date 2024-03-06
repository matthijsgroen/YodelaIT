import React from "react";
import Layout from "@theme/Layout";
import { parser, compiler } from "levenslied";
import styles from "./try-it.module.css";
import { Editor } from "../components/Editor";

const Page = () => {
  const [output, setOutput] = React.useState([""]);
  const [text, setText] = React.useState(
    "Mijn levenslied, is fantastisch, als het aankomt!\nZing mijn levenslied!\n"
  );

  let parsedText = null;
  let error = null;

  try {
    parsedText = parser.parse(text);
  } catch (e) {
    error = e;
  }
  const compiled = parsedText ? compiler.compile(parsedText) : null;

  return (
    <Layout>
      <div className={styles.layout}>
        <div className={styles.editor}>
          <h1>Schrijf je levenslied</h1>
          <Editor initialValue={text} onChange={(t) => setText(t)} />
          <div>{error && error.message}</div>
        </div>

        <div className={styles.result}>
          <button
            disabled={!compiled}
            onClick={() => {
              let result = [];
              const code = compiler.compile(parsedText, { safeLoops: true });
              try {
                const func = eval(code);
                console.log(func, code);
                func((e) => result.push(e));
              } catch (e) {
                result.push(e.message);
              }
              console.log(code);
              setOutput(result);
            }}
          >
            Voer programma uit
          </button>
          <h2>Uitvoer</h2>
          <pre className={styles.output}>{output.join("\n")}</pre>
        </div>

        <div className={styles.code}>
          <h2>Onder de motorkap</h2>
          <pre>{compiled || "// de tekst kon niet worden begrepen"}</pre>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
