const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

let [T] = input[0];
let readIdx = 1;
while (T--) {
  const [N] = input[readIdx++];
  const book = input[readIdx++];
  const sum = [];
  sum[0] = book[0];
  for (let i = 1; i < N; i += 1) {
    sum[i] = book[i] + sum[i - 1];
  }
  const dp = Array(N)
    .fill()
    .map(() => Array(N).fill(0));

  for (let i = 1; i < N; i += 1) {
    for (let j = 0; i + j < N; j += 1) {
      dp[j][i + j] = Infinity;
      for (let k = j; k < i + j; k += 1) {
        dp[j][i + j] = Math.min(
          dp[j][i + j],
          dp[j][k] + dp[k + 1][j + i] + sum[i + j] - sum[j] + book[j]
        );
      }
    }
  }

  console.log(dp[0][N - 1]);
}