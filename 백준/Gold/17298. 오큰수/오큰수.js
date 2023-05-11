const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n] = input[0];
const arr = input[1];
let res = Array(n).fill(-1);
let stk = [];

for (let i = 0; i < n; i += 1) {
  while (stk.length && arr[i] > arr[stk[stk.length - 1]]) {
    let idx = stk.pop();
    res[idx] = arr[i];
  }
  stk.push(i);
}

console.log(res.join(" "));