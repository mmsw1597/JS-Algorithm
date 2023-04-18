const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n, k] = input.shift();
let answer = -Infinity;
let lt = 0;
let rt = 0;
let sum = 0;

while (rt < n) {
  if (rt - lt === k) {
    answer = Math.max(answer, sum);
    sum -= input[0][lt];
    lt += 1;
  }
  sum += input[0][rt];
  rt += 1;
}

answer = Math.max(answer, sum);

console.log(answer);
