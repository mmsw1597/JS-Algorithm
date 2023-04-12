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

// 한 정점에서 모든 정점으로 가는 최단 경로가 아니라 모든 정점 간의 최단경로를 구할때 사용한다.
// 시간 복잡도는 O(V^3) 이다
// 음의 가중치가 있는 경우도 가능은 하나 음수 싸이클이 있는 경우는 최단거리를 구할 수 없다.
// 음수 싸이클 존재유무는 자기 자신으로 가는 경로가 0이아니라 음수인경우 음수싸이클이 존재하는 것이다.
