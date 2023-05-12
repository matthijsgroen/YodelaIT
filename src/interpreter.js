const stdlib = require("./stdlib");

const interpret = async (parsedCode) => {
  const variableStore = {};

  const resolve = (expressions) =>
    expressions.map((e) => {
      if (e.type === "string") {
        return { type: "YARN", value: e.contents };
      }
      if (e.type === "term") {
        return { type: "NOOB", ...variableStore[e.name] };
      }
      return e;
    });

  const executeStatements = async (statements) => {
    for (const statement of statements) {
      if (statement.type === "declareVar") {
        const varName = statement.varname.name;
        variableStore[varName] = { name: varName, type: "NOOB" };
      }
      if (statement.type === "functionCall") {
        const functionName = statement.functionName.name;
        const func = stdlib[functionName];
        if (func === undefined) {
          throw new Error(`${functionName} is not a function`);
        }
        await func.call(variableStore, resolve(statement.arguments));
      }
    }
  };

  await executeStatements(parsedCode.statements);

  //   console.log("code", JSON.stringify(parsedCode));
  console.log("end state", JSON.stringify(variableStore));
};

module.exports = {
  interpret,
};
