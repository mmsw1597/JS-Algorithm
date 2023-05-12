const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const n = input.shift();
const stack = [];
const res = Array(n).fill(0);

for (let i = 0; i < n; i += 1) {
  while (stack.length && input[i] < input[stack[stack.length - 1]]) {
    const idx = stack.pop();
    res[idx] = i - idx;
  }
  stack.push(i);
}

while (stack.length) {
  const idx = stack.pop();
  res[idx] = n - idx;
}

for (let i = n - 1; i >= 0; i -= 1) {
  while (stack.length && input[i] < input[stack[stack.length - 1]]) {
    const idx = stack.pop();
    res[idx] += Math.abs(i - idx + 1);
  }
  stack.push(i);
}

while (stack.length) {
  const idx = stack.pop();
  res[idx] += idx;
}

let max = -1;

for (let i = 0; i < n; i += 1) {
  if (max < res[i] * input[i]) max = res[i] * input[i];
}

console.log(max);