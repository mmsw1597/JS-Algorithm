const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n, c] = input.shift();
input[0].sort((a, b) => a - b);

const left = input[0].slice(0, Math.floor(n / 2));
const right = input[0].slice(Math.floor(n / 2));

const leftS = Array(0);
const rightS = Array(0);

const DFS = (idx, sum, arr, resArr) => {
  if (sum > c) {
    return;
  } else {
    resArr.push(sum);
  }

  for (let i = idx; i < arr.length; i += 1) {
    DFS(i + 1, sum + arr[i], arr, resArr);
  }
};

DFS(0, 0, left, leftS);
DFS(0, 0, right, rightS);

leftS.sort((a, b) => a - b);
rightS.sort((a, b) => b - a);

let lt = 0;
let rt = 0;
let answer = 0;

while (lt < leftS.length && rt < rightS.length) {
  const L = leftS[lt];
  const R = rightS[rt];

  if (L + R <= c) {
    lt += 1;
  } else {
    answer += lt;
    rt += 1;
  }
}

while (rt < rightS.length) {
  answer += lt;
  rt += 1;
}

console.log(answer);