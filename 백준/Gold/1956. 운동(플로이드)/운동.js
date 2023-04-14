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
// i랑 k가 같을때에는 j 반복문을 돌 필요가 없다 의미상으로 i -> i -> j 를 구하는 경로고 i -> i는 초기에 Infinity라 무의미하며 i -> i가 초기화되어도 i->j로 가는 최단 경로가
// i -> i를 한바퀴 돌고 i->j일 리가 없다.
