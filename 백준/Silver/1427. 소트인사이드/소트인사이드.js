const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

let [n] = input[0];
n = n
  .toString()
  .split("")
  .sort((a, b) => b - a)
  .join("");
console.log(+n);