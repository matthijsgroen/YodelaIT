/// <reference types="node" />
const program = require("commander");
const { readFile } = require("fs/promises");
const parser = require("./parser");
const interpreter = require("./interpreter");

program.description("Run your lolz").version("1.0");
program.command("run [filename]").action(async (filename) => {
  const fileContents = await readFile(filename, "utf8");
  const parsedCode = parser.parse(fileContents);
  await interpreter.interpret(parsedCode);
  process.exit(0);
});

program.parse(process.argv);
