const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n] = input.shift();
const [x] = input.pop();

input[0].sort((a, b) => a - b);

let lt = 0;
let rt = input[0].length - 1;
let answer = 0;

while (lt < rt) {
  const left = input[0][lt];
  const right = input[0][rt];

  if (left + right === x) {
    answer += 1;
    lt += 1;
    rt -= 1;
  } else if (left + right > x) {
    rt -= 1;
  } else {
    lt += 1;
  }
}

console.log(answer);