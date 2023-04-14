const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const n = input[0];
input[1].sort((a, b) => a - b);
let lt = 0;
let rt = input[1].length - 1;
let answer = [];
let min = Infinity;

while (lt < rt) {
  const left = input[1][lt];
  const right = input[1][rt];

  if (min > Math.abs(left + right)) {
    answer = [left, right];
    min = Math.abs(left + right);
  }

  if (left + right < 0) {
    lt += 1;
  } else if (left + right > 0) {
    rt -= 1;
  } else {
    break;
  }
}

console.log(answer.join(" "));