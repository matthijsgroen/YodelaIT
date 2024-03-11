import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import { parser, compiler } from "levenslied";
import styles from "./probeer-het.module.css";
import { Editor } from "../components/Editor";
import exampleScripts from "./example-scripts";

function stringToBase64(string) {
  const bytes = new TextEncoder().encode(string);
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte)
  ).join("");
  return btoa(binString);
}

function base64ToString(base64) {
  const binString = atob(base64);
  return new TextDecoder().decode(
    Uint8Array.from(binString, (m) => m.codePointAt(0))
  );
}

const Page = () => {
  const [output, setOutput] = React.useState([""]);
  const [text, setInnerText] = React.useState(
    exampleScripts[0].script.join("\n")
  );
  const [displayCode, setDisplayCode] = React.useState(false);

  let parsedText = null;
  let error = null;

  const setText = (text) => {
    // Usage
    const contents = stringToBase64(text);
    const url = new URL(document.location.href);
    url.hash = `code/${contents}`;
    history.replaceState({}, "", url);
    setInnerText(text);
  };

  try {
    parsedText = parser.parse(text);
  } catch (e) {
    error = e;
  }
  const compiled = parsedText ? compiler.compile(parsedText) : null;

  useEffect(() => {
    const url = new URL(document.location.href);
    if (url.hash.startsWith("#code/")) {
      const data = url.hash.slice(6);
      const contents = base64ToString(data);
      setInnerText(contents);
    }
  }, []);

  return (
    <Layout>
      <div className={styles.layout}>
        <div className={styles.topbar}>
          <h1>Schrijf je levenslied</h1>
          <div className={styles.toolbar}>
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
                setDisplayCode(false);
              }}
            >
              Voer programma uit
            </button>
            <select
              onChange={(v) => {
                const script = exampleScripts.find(
                  (s) => s.name === v.currentTarget.value
                );
                if (script) {
                  setText(script.script.join("\n"));
                }
              }}
              value={""}
            >
              <option value="">Kies een voorbeeld...</option>
              {exampleScripts.map((example) => (
                <option value={example.name} key={example.name}>
                  {example.name}
                </option>
              ))}
            </select>
            <span style={{ flex: 1 }}></span>
            <button
              disabled={!displayCode}
              onClick={() => setDisplayCode(false)}
            >
              Uitvoer
            </button>
            <button disabled={displayCode} onClick={() => setDisplayCode(true)}>
              Resultaat code
            </button>
          </div>
        </div>
        <div className={styles.editor}>
          <Editor value={text} onChange={(t) => setText(t)} />
          <div>{error && error.message}</div>
        </div>

        <div
          className={styles.result}
          style={{ display: displayCode ? "none" : "block" }}
        >
          <h2>Uitvoer</h2>
          <pre className={styles.output}>{output.join("\n")}</pre>
        </div>

        <div
          className={styles.result}
          style={{ display: displayCode ? "block" : "none" }}
        >
          <h2>Onder de motorkap</h2>
          <pre className={styles.compiled}>
            {compiled || "// de tekst kon niet worden begrepen"}
          </pre>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
