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

// DP는 아직 연습이 필요하다.
// 맨 처음 접근법은 완전탐색으로 접근하는게 좋아 보임
// 어짜피 행렬 곱셈은 주어진 순서대로 해야하기 때문에 n개의 행렬이 있는 경우 총 경우의 수는
// 1번째 * (2번째 ~ n번째) , (1~2번째) * (3~n번째) , ... , (1~n-1번째) * n번째 중 하나다.
// 여기서 (2번째 ~ n번째)같은 형태가 부분 문제이고 해당 부분 문제에서 또 최솟값을 구해야 하는 것.
// 따라서 dp[i][j]를 i번째에서 j번째까지 행렬의 곱중 최솟값이라고 정의하면
// dp[i][j] = min(dp[i][j], dp[i][k] + dp[k+1][j] + r * c * e)가 된다.
// 이때 k는 i~j 사이를 나누는 기준점
// r, c, e는 r x c 행렬과 c x e 행렬이 있을때 두 행렬을 곱하는 비용
// 점화식을 알아도 코드로 구현하기 까다롭다.
// DP는 차근차근 연습해보자. 아직 너무 못한다.
