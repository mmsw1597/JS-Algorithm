const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n] = input[0];
const A = input[1];
const [b, c] = input[2];

let answer = n;

for (let x of A) {
  if (x > b) answer += Math.ceil((x - b) / c);
}

console.log(answer);
