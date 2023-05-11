const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n, m] = input[0];
const apps = input[1];
const cost = input[2];

const dp = Array(n + 1)
  .fill()
  .map(() => Array(100 * 100 + 1).fill(-Infinity));

const DFS = (num, cur, mem) => {
  if (num > n || dp[num][cur] >= mem) return;

  dp[num][cur] = mem;
  DFS(num + 1, cur + cost[num], mem + apps[num]);
  DFS(num + 1, cur, mem);
};

DFS(0, 0, 0);
let tmp = 0;

while (dp[n][tmp] < m) {
  tmp += 1;
}

console.log(tmp);

// 굳이 재귀로 풀지 않아도 될듯
// 조금 더 최적화 가능함. 이미 목표 메모리를 확보했을경우 더 깊이 함수를 호출할 필요 없음
