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

// 플로이드 워셜
// 이 문제에서는 자기 자신으로 가는 경로를 0으로 초기화하면 안된다.
// i랑 k가 같을때에는 j 반복문을 돌 필요가 없다 문제상에서는 dp[i][i]가 Infinity라 무의미한 반복문을 수행한다.
