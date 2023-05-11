const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n] = input[0];
const list = input[1];
const target = input[3];

const dp = Array(n + 1)
  .fill()
  .map(() => Array(40001).fill(false));

const DFS = (num, w) => {
  if (num > n || dp[num][w]) return;

  dp[num][w] = true;
  DFS(num + 1, w + list[num]);
  DFS(num + 1, w);
  DFS(num + 1, Math.abs(w - list[num]));
};

DFS(0, 0);
let res = "";

for (let x of target) {
  if (dp[n][x]) res += "Y ";
  else res += "N ";
}

console.log(res.trim());

// DP는 항상 완전 탐색으로 어떻게 풀지를 먼저 고려해야함
// 추를 구슬쪽에 놓거나, 놓지 않거나, 구슬 반대쪽에 넣거나 총 3가지 경우의 수를 따라가야함
// 이렇게 되면 최대 3^30의 경우의 수가 나오므로 메모이제이션이 필요함
// 추의 최대 개수는 30개, 확인하고자 하는 구슬 무게는 최대 40000
// DFS 탐색을 하는데에 있어서 같은 개수를 썼는데 같은 무개가 나온 경우가 이미 있었다면 이후의 경우의 수는 모두 중복
// 중복을 제거하게되면 탐색하는 경우의 수는 30 * 40000의 경우의수를 넘을 수 없다
