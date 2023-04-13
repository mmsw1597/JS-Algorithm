const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n, m] = input[0];
const dp = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));

for (let i = 1; i < input.length; i += 1) {
  const [u, v, w] = input[i];
  dp[u][v] = w;
}
let cycle = Infinity;

for (let k = 1; k <= n; k += 1) {
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (dp[i][j] > dp[i][k] + dp[k][j]) dp[i][j] = dp[i][k] + dp[k][j];
    }
  }
}

for (let i = 1; i <= n; i += 1) {
  cycle = Math.min(dp[i][i], cycle);
}

console.log(cycle === Infinity ? -1 : cycle);