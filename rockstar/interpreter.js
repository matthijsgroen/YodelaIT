const MAX_LOOP = 10000;

const castTo = (value, type) => {
  if (value.type === type) {
    return value;
  }
  if (value.type === "null" && type === "number") {
    return { type: "number", value: 0 };
  }
  return value;
};

const compare = (valueA, valueB, op) => {
  const types = [valueA.type, valueB.type].sort();
  let a = valueA;
  let b = valueB;

  if (types[0] === "null" && types[1] === "number") {
    a = castTo(valueA, "number");
    b = castTo(valueB, "number");
  }

  if (a.type === "boolean" && b.type === "boolean") {
    if (op === "and") {
      return { type: "boolean", value: a.value && b.value };
    }
    if (op === "or") {
      return { type: "boolean", value: a.value || b.value };
    }
    console.log("boolean compare", a, b, op);
  }

  if (a.type === "number" && b.type === "number") {
    if (op === "equal") {
      return { type: "boolean", value: a.value === b.value };
    }
    if (op === "not-equal") {
      return { type: "boolean", value: a.value !== b.value };
    }
    if (op === "greater-equal") {
      return { type: "boolean", value: a.value >= b.value };
    }

    console.log("number compare", a, b, op);
  }
  console.log("missing compare", valueA, valueB, op);

  return { type: "boolean", value: false };
};

const resolve = async (expression, variableStore, globalStore) => {
  if (expression.type === "CommonVariable") {
    return variableStore[expression.name.toLowerCase()];
  }
  if (expression.type === "ProperVariable") {
    return variableStore[expression.name.toLowerCase()];
  }
  if (expression.type === "compare") {
    const a = await resolve(expression.a, variableStore, globalStore);
    const b = await resolve(expression.b, variableStore, globalStore);
    const result = compare(a, b, expression.op);
    return result;
  }
  if (expression.type === "logic") {
    const a = await resolve(expression.a, variableStore, globalStore);
    const b = await resolve(expression.b, variableStore, globalStore);
    const result = compare(a, b, expression.op);
    return result;
  }
  if (expression.type === "calculation") {
    const a = castTo(
      await resolve(expression.a, variableStore, globalStore),
      "number"
    );
    const varB = await resolve(expression.b, variableStore, globalStore);
    const b = castTo(varB, "number");
    if (expression.op === "subtraction") {
      return { type: "number", value: a.value - b.value };
    }
    if (expression.op === "addition" && varB.type === "string") {
      return { type: "string", value: [a.value, b.value].join(" ") };
    }
    if (expression.op === "addition") {
      return { type: "number", value: a.value + b.value };
    }
    console.log("calc:", expression, a, b);
  }
  if (expression.type === "functionCall") {
    const functionCode = globalStore[expression.name.name.toLowerCase()];
    const parameters = [];
    for (const param of expression.parameters) {
      const value = await resolve(param, variableStore, globalStore);
      parameters.push(value);
    }

    const localScope = {};
    functionCode.parameters.forEach((param, i) => {
      localScope[param.name.toLowerCase()] = parameters[i] ?? {
        type: "mysterious",
        value: undefined,
      };
    });

    const result = await executeStatements(
      functionCode.scope,
      localScope,
      globalStore
    );
    return result;
  }

  return expression;
};

const executeStatements = async (
  statements,
  variableStore = {},
  globalStore = {}
) => {
  for (const statement of statements) {
    if (statement.type === "assignment") {
      const value = await resolve(statement.value, variableStore, globalStore);
      const variable = statement.variable;
      variableStore[variable.name.toLowerCase()] = value;
    } else if (statement.type === "function") {
      globalStore[statement.name.name.toLowerCase()] = statement;
    } else if (statement.type === "loop") {
      let safety = 0;
      const comp = statement.kind === "while" ? true : false;
      while (
        (await resolve(statement.condition, variableStore, globalStore))
          .value === comp
      ) {
        const state = await executeStatements(
          statement.block,
          variableStore,
          globalStore
        );
        if (
          state &&
          state.type === "loopControl" &&
          state.control === "break"
        ) {
          break;
        }
        // check for breaks / continues
        safety++;

        if (safety > MAX_LOOP) {
          break;
        }
      }
    } else if (statement.type === "increment") {
      const value = castTo(
        await resolve(statement.variable, variableStore, globalStore),
        "number"
      );
      const variable = statement.variable;
      variableStore[variable.name.toLowerCase()] = {
        type: "number",
        value: value.value + statement.amount,
      };
    } else if (statement.type === "decrement") {
      const value = castTo(
        await resolve(statement.variable, variableStore, globalStore),
        "number"
      );
      const variable = statement.variable;
      variableStore[variable.name.toLowerCase()] = {
        type: "number",
        value: value.value - statement.amount,
      };
    } else if (statement.type === "output") {
      const res = await resolve(statement.output, variableStore, globalStore);
      console.log(res.value);
    } else if (statement.type === "if") {
      const condition = await resolve(
        statement.condition,
        variableStore,
        globalStore
      );
      if (condition.value === true) {
        const state = await executeStatements(
          statement.block,
          variableStore,
          globalStore
        );
        if (state && state.type === "loopControl") {
          return state;
        }
      }
    } else if (statement.type === "loopControl") {
      return statement;
    } else if (statement.type === "return") {
      return await resolve(statement.value, variableStore, globalStore);
    } else {
      console.log("unknown statement: ", statement.type);
    }
  }
};

const interpret = async (parsedCode) => {
  const variableStore = {};

  await executeStatements(parsedCode, variableStore, variableStore);

  //   console.log("code", JSON.stringify(parsedCode));
  //   console.log("end state", JSON.stringify(variableStore));
};

module.exports = {
  interpret,
};
