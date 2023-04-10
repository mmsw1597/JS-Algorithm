const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map((v) => +v);
const [v1, v2] = input[input.length - 1].split(" ").map((v) => +v);
const graph = Array(n + 1)
  .fill()
  .map((_) => Array(n + 1).fill(Infinity));

for (let i = 1; i < input.length - 1; i++) {
  let [u, v, w] = input[i].split(" ").map((v) => +v);
  graph[u][v] = w;
  graph[v][u] = w;
}

if (v1 > n || v2 > n) {
  console.log(-1);
  return;
}

const findSmallestNode = (visited, dist) => {
  let minIdx = 0;
  let minDist = Infinity;
  for (let i = 1; i <= n; i += 1) {
    if (visited[i]) continue;
    if (minDist > dist[i]) {
      minDist = dist[i];
      minIdx = i;
    }
  }
  return minIdx;
};

const dijkstra = (start) => {
  const visited = Array.from({ length: n + 1 }, () => false);
  const dist = Array.from({ length: n + 1 }, () => Infinity);

  for (let i = 1; i <= n; i += 1) {
    dist[i] = graph[start][i];
  }
  dist[start] = 0;
  visited[start] = true;
  cnt = 1;

  while (cnt !== n) {
    let minIdx = findSmallestNode(visited, dist);
    visited[minIdx] = true;
    cnt += 1;
    for (let i = 1; i <= n; i += 1) {
      if (visited[i]) continue;
      if (dist[i] > dist[minIdx] + graph[minIdx][i])
        dist[i] = dist[minIdx] + graph[minIdx][i];
    }
  }
  return dist;
};

let dist1 = dijkstra(1);
let dist2 = dijkstra(v1);
let dist3 = dijkstra(v2);

let answer = Math.min(
  dist1[v1] + dist2[v2] + dist3[n],
  dist1[v2] + dist3[v1] + dist2[n]
);

answer = answer === Infinity ? -1 : answer;
console.log(answer);
