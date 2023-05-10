const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n] = input[0];
const list = input[1];
const target = input[3];

const dp = Array(n + 1)
  .fill()
  .map(() => Array(40001).fill(false));

const DFS = (num, w) => {
  if (num > n || dp[num][w]) return;

  dp[num][w] = true;
  DFS(num + 1, w + list[num]);
  DFS(num + 1, w);
  DFS(num + 1, Math.abs(w - list[num]));
};

DFS(0, 0);
let res = "";

for (let x of target) {
  if (dp[n][x]) res += "Y ";
  else res += "N ";
}

console.log(res.trim());
