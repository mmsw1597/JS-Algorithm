const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

let [n] = input[0];

const dp = Array(n + 1)
  .fill()
  .map(() => Array(n + 1).fill(0));

for (let i = 1; i < n; i += 1) {
  for (let j = 1; i + j <= n; j += 1) {
    dp[j][i + j] = Infinity;
    for (let k = j; k < i + j; k += 1) {
      dp[j][j + i] = Math.min(
        dp[j][j + i],
        dp[j][k] +
          dp[k + 1][j + i] +
          input[j][0] * input[k][1] * input[i + j][1]
      );
    }
  }
}

console.log(dp[1][n]);