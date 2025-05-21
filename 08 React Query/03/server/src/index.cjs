require("@babel/register")({ extensions: [".js", ".ts"] });
const { startUp } = require("./server.ts");

startUp();
