let needsEqual = false;
let needsCoerce = false;
let needsAdd = false;
let useSafeLoops = false;
let safeLoopCounter = 0;
/**
 * @type Record<string, string[]>
 */
let scope = { global: [] };
/**
 * @type string[]
 */
let needsInitialize = [];
let currentScope = "global";

const LOOP_MAX = 10_000;

const varname = (variable) => {
  const firstLower =
    variable.type === "CommonVariable" || variable.type === "SimpleVariable";

  const scopeVar = variable.name
    .split(/\s+/)
    .map((w, i) =>
      i === 0 && firstLower
        ? w.toLowerCase()
        : w[0].toUpperCase() + w.slice(1).toLowerCase()
    )
    .join("");

  return scopeVar;
};

const resolve = (expression) => {
  if (!expression) {
    return "nil";
  }
  if (expression.type === "string") {
    return `"${expression.value}"`;
  }
  if (expression.type === "number") {
    return `${expression.value}`;
  }
  if (expression.type === "undefined") {
    return "nil";
  }
  if (expression.type === "null") {
    return "nil";
  }
  if (
    expression.type === "CommonVariable" ||
    expression.type === "ProperVariable" ||
    expression.type === "SimpleVariable"
  ) {
    const scopeVar = varname(expression);
    if (
      !scope[currentScope].includes(scopeVar) &&
      !needsInitialize.includes(scopeVar)
    ) {
      needsInitialize.push(scopeVar);
    }
    return scopeVar;
  }
  if (expression.type === "comparison" && expression.op === "equal") {
    needsEqual = true;
    return `equal(${resolve(expression.a)}, ${resolve(expression.b)})`;
  }
  if (expression.type === "comparison" && expression.op === "not-equal") {
    needsEqual = true;
    return `!equal(${resolve(expression.a)}, ${resolve(expression.b)})`;
  }
  if (expression.type === "comparison") {
    const opMap = {
      greater: ">",
      lesser: "<",
      "greater-equal": ">=",
      "lesser-equal": "<=",
    };
    return `${resolve(expression.a)} ${opMap[expression.op]} ${resolve(
      expression.b
    )}`;
  }
  if (expression.type === "functionCall") {
    return processFunctionCall(expression);
  }
  if (expression.type === "booleanLogic" && expression.op === "and") {
    return `(${resolve(expression.a)} && ${resolve(expression.b)})`;
  }
  if (expression.type === "booleanLogic" && expression.op === "or") {
    return `(${resolve(expression.a)} || ${resolve(expression.b)})`;
  }
  if (expression.type === "calculation" && expression.op === "subtraction") {
    needsCoerce = true;
    return `(coerce(${resolve(expression.a)}, "number") - ${resolve(
      expression.b
    )})`;
  }
  if (expression.type === "calculation" && expression.op === "addition") {
    needsAdd = true;
    return `add(${resolve(expression.a)}, ${resolve(expression.b)})`;
  }
  if (expression.type === "calculation" && expression.op === "times") {
    return `(${resolve(expression.a)} * ${resolve(expression.b)})`;
  }
  if (expression.type === "calculation" && expression.op === "division") {
    return `(${resolve(expression.a)} / ${resolve(expression.b)})`;
  }

  return "true";
};

const processVarDeclaration = ({ variable, value }) => {
  const name = varname(variable);
  needsInitialize = needsInitialize.filter((v) => v !== name);
  return `${processVarAssignment({ variable, value })}`;
};

const processVarAssignment = ({ variable, value }) =>
  `${varname(variable)} = ${resolve(value)}`;

const indent = (code) =>
  code
    .split("\n")
    .map((l) => `  ${l}`)
    .join("\n");

const statementBlock = (statements) =>
  "\n" + indent(processStatements(statements)) + "\n";

const processFunctionDeclaration = ({ name, parameters, scope }) => {
  const functionName = varname(name);
  needsInitialize = needsInitialize.filter((v) => v !== functionName);
  return `def ${varname(name)}(${parameters
    .map((n) => `${varname(n)} = nil`)
    .join(", ")})${statementBlock(scope)}end\n`;
};

const processFunctionCall = ({ name, parameters }) =>
  `${varname(name)}(${parameters.map(resolve).join(", ")})`;

const processReturn = ({ value }) => `return ${resolve(value)}`;

const processLoop = ({ condition, kind, block }) =>
  `${kind === "until" ? "until" : "while"} ${resolve(
    condition
  )}${statementBlock(block)}end`;

const processSafeLoop = ({ condition, kind, block }) => {
  const loopId = safeLoopCounter++;

  return `i${loopId} = 0\n${kind === "until" ? "while" : "until"} ${resolve(
    condition
  )})\n  i${loopId} += 1\n  throw "lus is niet op tijd beëindigd" if i${loopId} > ${LOOP_MAX}\n${statementBlock(
    block
  )}end`;
};

const processIf = ({ condition, block }) =>
  `if ${resolve(condition)}${statementBlock(block)}end`;

const processOutput = ({ output }) => `puts ${resolve(output)}`;

const processLoopControl = ({ control }) =>
  control === "continue" ? "next" : "break";

const processIncrementVariable = ({ variable, amount }) => {
  needsCoerce = true;
  return `${resolve(variable)} = coerce(${resolve(
    variable
  )}, "number") + ${amount}`;
};

const processDecrementVariable = ({ variable, amount }) => {
  needsCoerce = true;
  return `${resolve(variable)} = coerce(${resolve(
    variable
  )}, "number") - ${amount}`;
};

const processRoundDown = ({ variable }) => {
  needsCoerce = true;
  return `${resolve(variable)} = coerce(${resolve(variable)}, "number").floor`;
};

const processRoundUp = ({ variable }) => {
  needsCoerce = true;
  return `${resolve(variable)} = coerce(${resolve(variable)}, "number").ceil`;
};

const processComment = ({ content }) => `# ${content}`;

const processStatements = (statements) => {
  const result = [];

  for (const statement of statements) {
    if (statement.type === "variableDeclaration") {
      scope[currentScope].push(varname(statement.variable));
      result.push(processVarDeclaration(statement));
      continue;
    }
    if (statement.type === "variableAssignment") {
      if (
        scope[currentScope].includes(varname(statement.variable)) ||
        scope["global"].includes(varname(statement.variable))
      ) {
        result.push(processVarAssignment(statement));
      } else {
        scope[currentScope].push(varname(statement.variable));
        result.push(processVarDeclaration(statement));
      }

      continue;
    }
    if (statement.type === "functionDeclaration") {
      scope[statement.name] = statement.parameters.map(varname);
      let levelUpScope = currentScope;
      currentScope = statement.name;
      result.push(processFunctionDeclaration(statement));
      currentScope = levelUpScope;
      continue;
    }
    if (statement.type === "functionCall") {
      result.push(processFunctionCall(statement));
      continue;
    }
    if (statement.type === "return") {
      result.push(processReturn(statement));
      continue;
    }
    if (statement.type === "loop" && useSafeLoops) {
      result.push(processSafeLoop(statement));
      continue;
    }
    if (statement.type === "loop") {
      result.push(processLoop(statement));
      continue;
    }
    if (statement.type === "if") {
      result.push(processIf(statement));
      continue;
    }
    if (statement.type === "output") {
      result.push(processOutput(statement));
      continue;
    }
    if (statement.type === "loopControl") {
      result.push(processLoopControl(statement));
      continue;
    }
    if (statement.type === "incrementVariable") {
      result.push(processIncrementVariable(statement));
      continue;
    }
    if (statement.type === "decrementVariable") {
      result.push(processDecrementVariable(statement));
      continue;
    }
    if (statement.type === "roundDown") {
      result.push(processRoundDown(statement));
      continue;
    }
    if (statement.type === "roundUp") {
      result.push(processRoundUp(statement));
      continue;
    }
    if (statement.type === "comment") {
      result.push(processComment(statement));
      continue;
    }
    console.log(statement);
  }

  return result.join("\n");
};

const coerceFunc = `
def coerce(a, targetType)
  return a if a.instance_of? Integer and targetType.eql? "number"
  return a if a.instance_of? Float and targetType.eql? "number"
  return 0 if a.nil? and targetType.eql? "number"
  throw "Kan niet naar doeltype converteren";
end
`;

const equalFunc = `
def equal(a, b)
  return a == coerce(b, "number") if a.instance_of? Integer and !b.instance_of? Integer
  return coerce(a, "number") == b if !a.instance_of? Integer and b.instance_of? Integer
  a.eql? b
end
`;

const addFunc = `
def add(a, b)
  return a.to_f + b if a.instance_of? String and b.instance_of? Integer
  return "#{a} #{b}" if b.instance_of? String

  a + b
end
`;

const compileRuby = (parsedCode, { safeLoops = false } = {}) => {
  needsEqual = false;
  needsCoerce = false;
  needsAdd = false;
  useSafeLoops = safeLoops;
  scope = { global: [] };
  needsInitialize = [];
  currentScope = "global";

  let code = "\n" + processStatements(parsedCode);
  if (needsEqual) {
    code = equalFunc + code;
  }
  if (needsAdd) {
    code = addFunc + code;
  }
  if (needsCoerce || needsEqual) {
    code = coerceFunc + code;
  }
  if (needsInitialize.length > 0) {
    const initCode = needsInitialize
      .map((name) => `let ${name} = undefined;\n`)
      .join("");
    code = initCode + code;
  }
  // return `(output) => {\n${indent(code)}\n}`;
  return code;
};

module.exports = {
  compileRuby,
};
