const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n] = input[0];
const [m] = input[1];
const dp = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
for (let i = 1; i <= n; i += 1) dp[i][i] = 0;

for (let i = 2; i < input.length; i += 1) {
  const [u, v, w] = input[i];
  dp[u][v] = Math.min(dp[u][v], w);
}

for (let k = 1; k <= n; k += 1) {
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (dp[i][j] > dp[i][k] + dp[k][j]) dp[i][j] = dp[i][k] + dp[k][j];
    }
  }
}

let result = [];
for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= n; j += 1) {
    result.push(dp[i][j] === Infinity ? 0 : dp[i][j]);
  }
  console.log(result.join(" "));
  result = [];
}
