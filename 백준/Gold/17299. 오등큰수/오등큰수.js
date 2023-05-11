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
let count = {};

for (let x of arr) {
  if (count[x]) count[x] += 1;
  else count[x] = 1;
}

for (let i = 0; i < n; i += 1) {
  while (stk.length && count[arr[i]] > count[arr[stk[stk.length - 1]]]) {
    res[stk.pop()] = arr[i];
  }
  stk.push(i);
}

console.log(res.join(" "));