class Node {
  constructor(v, c) {
    this.v = v;
    this.c = c;
  }
}

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const n = input.shift();
const stack = [];
let res = 0;

for (let i = 0; i < n; i += 1) {
  let v = input[i];
  let c = 0;

  while (stack.length && input[i] > stack[stack.length - 1].v) {
    stack.pop();
    res += 1;
  }
  if (stack.length && input[i] === stack[stack.length - 1].v) {
    c = stack[stack.length - 1].c + 1;
    res += c;
  }
  if (stack.length - c > 0) res += 1;

  stack.push(new Node(input[i], c));
}

console.log(res);