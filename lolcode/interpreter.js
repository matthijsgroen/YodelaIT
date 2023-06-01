const stdlib = require("./stdlib");

const interpret = async (parsedCode) => {
  const resolve = (expressions, variableStore) =>
    expressions.map((e) => {
      if (e.type === "REF") {
        return { type: "NOOB", ...variableStore[e.name] };
      }
      if (e.type === "compare") {
        const [a, b] = resolve([e.a, e.b], variableStore);
        if (e.op === "equal") {
          return { type: "TROOF", value: a.value === b.value };
        }
        if (e.op === "notEqual") {
          return { type: "TROOF", value: a.value !== b.value };
        }
      }
      return e;
    });

  const executeStatements = async (statements, variableStore = {}) => {
    for (const statement of statements) {
      if (statement.type === "declareVar") {
        const varName = statement.varname.name;
        variableStore[varName] = { name: varName, type: "NOOB" };
      } else if (statement.type === "assignVar") {
        const varName = statement.varname.name;
        variableStore[varName] = {
          name: varName,
          ...resolve([statement.value], variableStore)[0],
        };
      } else if (statement.type === "if") {
        const result = resolve([statement.condition], variableStore)[0];
        if (result.value !== false && result.value !== undefined) {
          await executeStatements(statement.win, variableStore);
        } else {
          const alternative = statement.options.find((option) => {
            const result = resolve([option.condition], variableStore)[0];
            return result.value !== false && result.value !== undefined;
          });
          if (alternative) {
            await executeStatements(alternative.code, variableStore);
          } else {
            await executeStatements(statement.fail, variableStore);
          }
        }
      } else if (statement.type === "functionCall") {
        const functionName = statement.functionName.name;
        const func = stdlib[functionName];
        if (func === undefined) {
          throw new Error(`${functionName} is not a function`);
        }
        await func.call(
          variableStore,
          resolve(statement.arguments, variableStore)
        );
      } else if (statement.type === "comment") {
        // ignore :-)
      } else {
        console.log(statement.type);
      }
    }
  };

  const variableStore = {};

  await executeStatements(parsedCode.statements, variableStore);

  //   console.log("code", JSON.stringify(parsedCode));
  //   console.log("end state", JSON.stringify(variableStore));
};

module.exports = {
  interpret,
};
