const parser = require("./parser");
const compiler = require("./compiler");
const compilerRb = require("./compiler-rb");

module.exports = {
  parser,
  compiler: {
    compileJavascript: compiler.compile,
    compileRuby: compilerRb.compileRuby,
  },
};
