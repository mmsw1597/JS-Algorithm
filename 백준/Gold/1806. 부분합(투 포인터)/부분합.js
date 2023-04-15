const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n, s] = input.shift();

let lt = 0;
let rt = 1;
let sum = input[0][lt];
let answer = Infinity;

while (lt < input[0].length) {
  if (sum >= s) {
    answer = Math.min(answer, rt - lt);
    sum -= input[0][lt];
    lt += 1;
  } else {
    if (rt === input[0].length) break;
    sum += input[0][rt];
    rt += 1;
  }
  if (lt === rt) {
    rt += 1;
  }
}

console.log(answer === Infinity ? 0 : answer);