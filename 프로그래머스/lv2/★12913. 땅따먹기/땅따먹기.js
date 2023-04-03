function solution(land) {
  let answer = 0;
  let dp = Array.from(Array(land.length), () => Array(4).fill(0));
  let len = land.length - 1;

  dp[0][0] = land[0][0];
  dp[0][1] = land[0][1];
  dp[0][2] = land[0][2];
  dp[0][3] = land[0][3];

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      let max = 0;
      for (let k = 0; k < 4; k++) {
        if (k === j) continue;
        if (max < dp[i - 1][k]) max = dp[i - 1][k];
      }
      dp[i][j] = max + land[i][j];
    }
  }

  return Math.max(dp[len][0], dp[len][1], dp[len][2], dp[len][3]);
}

// DP
