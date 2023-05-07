const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [m, n] = input.shift();
const dp = Array(m)
  .fill()
  .map(() => Array(n).fill(-1));
const d = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const DFS = (y, x) => {
  if (dp[y][x] !== -1) {
    return dp[y][x];
  }

  if (y === m - 1 && x === n - 1) {
    return 1;
  }

  dp[y][x] = 0;

  for (let [dy, dx] of d) {
    let ny = dy + y;
    let nx = dx + x;

    if (ny >= 0 && ny < m && nx >= 0 && nx < n && input[y][x] > input[ny][nx]) {
      dp[y][x] += DFS(ny, nx);
    }
  }

  return dp[y][x];
};

DFS(0, 0);

console.log(dp[0][0]);