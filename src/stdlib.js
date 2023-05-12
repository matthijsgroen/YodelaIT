const { createInterface } = require("node:readline/promises");

const stdlib = {
  GIMMEH: {
    call: async (store, args) => {
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      const varName = args[0].name;
      const answer = await rl.question(`GIMMEH ${varName}: `);
      store[varName] = { type: "YARN", value: answer };
    },
  },
  VISIBLE: {
    call: async (_store, args) => {
      console.log(args.map((a) => a.value).join(""));
    },
  },
};

module.exports = stdlib;
