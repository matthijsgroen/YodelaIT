/// <reference types="node" />
const program = require("commander");
const { readFile } = require("fs/promises");
const parser = require("./parser");
const compiler = require("./compiler");
const compilerRb = require("./compiler-rb");

program.description("Rock your ballad").version("1.0");
program.command("run [filename]").action(async (filename) => {
  const fileContents = await readFile(filename, "utf8");
  const parsedCode = parser.parse(fileContents);
  const jsCode = compiler.compile(parsedCode, { safeLoops: true });

  eval(`(${jsCode})(console.log)`);
  process.exit(0);
});

program.command("compile [filename]").action(async (filename) => {
  const fileContents = await readFile(filename, "utf8");
  const parsedCode = parser.parse(fileContents);

  const jsCode = compiler.compile(parsedCode);
  console.log(jsCode);
  process.exit(0);
});

program.command("compile-rb [filename]").action(async (filename) => {
  const fileContents = await readFile(filename, "utf8");
  const parsedCode = parser.parse(fileContents);

  const jsCode = compilerRb.compileRuby(parsedCode);
  console.log(jsCode);
  process.exit(0);
});

program.parse(process.argv);
