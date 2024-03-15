import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import { parser, compiler } from "levenslied";
import styles from "./probeer-het.module.css";
import { Editor } from "../components/Editor";
import exampleScripts from "../data/example-scripts";
import { base64ToString, urlToEditor } from "../components/base64";
import { Button, DropdownMenu, MenuItem } from "@kabisa/ui-components";
import "@kabisa/ui-components/index.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Page = () => {
  const [output, setOutput] = React.useState([""]);
  const [text, setInnerText] = React.useState(
    exampleScripts[0].script.join("\n")
  );
  const [displayCode, setDisplayCode] = React.useState(false);
  const [selectedTitle, SetSelectedTitle] = React.useState(
    exampleScripts[0].name
  );
  const { siteConfig } = useDocusaurusContext();

  let parsedText = null;

  const setText = (text) => {
    // Usage
    const url = urlToEditor(text, siteConfig.baseUrl);
    history.replaceState({}, "", url);
    setInnerText(text);
  };

  const executeCode = () => {
    let result = [];
    const code = compiler.compile(parsedText, { safeLoops: true });
    try {
      const func = eval(code);
      func((e) => result.push(e));
    } catch (e) {
      result.push(e.message);
    }
    setOutput(result);
    setDisplayCode(false);
  };

  const onMenuItemSelect = (e) => {
    const script = exampleScripts.find((s) => s.name === e.value);
    if (script) {
      setText(script.script.join("\n"));
      SetSelectedTitle(script.name);
    }
  };

  try {
    parsedText = parser.parse(text);
  } catch (e) {}
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
        <div className={styles.left}>
          <Button variant="primary" onClick={executeCode}>
            <span>Voer programma uit</span>
          </Button>
          <div className={styles.examplesDropdownWrapper}>
            <DropdownMenu
              className={styles.dropdownMenu}
              direction="bottom"
              color="primary"
              text={"Kies een voorbeeld..."}
            >
              {exampleScripts.map((example) => (
                <MenuItem
                  value={example.name}
                  key={example.name}
                  onClick={onMenuItemSelect}
                >
                  {example.name}
                </MenuItem>
              ))}
            </DropdownMenu>
          </div>
        </div>

        <div className={styles.right}>
          <Button disabled={!displayCode} onClick={() => setDisplayCode(false)}>
            Uitvoer
          </Button>
          <Button disabled={displayCode} onClick={() => setDisplayCode(true)}>
            Resultaat code
          </Button>
        </div>
        <div className={styles.editor}>
          <h2>Schrijf je levenslied</h2>
          <Editor value={text} onChange={(t) => setText(t)} />
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
