class Node {
  constructor(u, v, w) {
    this.u = u;
    this.v = v;
    this.w = w;
  }
}
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n, m] = input[0];
const edgeList = [];
const dist = Array.from({ length: n + 1 }, () => Infinity);

// 모든 간선을 배열에 담아준다.
for (let i = 1; i < input.length; i += 1) {
  const [u, v, w] = input[i];
  edgeList.push(new Node(u, v, w));
}

let start = 1;
dist[start] = 0;

// 총 V번 모든 간선을 순회하면서 최단거리를 갱신해준다.
for (let i = 1; i <= n; i += 1) {
  for (let { u, v, w } of edgeList) {
    if (dist[u] !== Infinity && dist[v] > dist[u] + w) {
      //만약 V번째에서 최단거리가 갱신된다면 그것은 음수 사이클이 존재한다는 뜻이다.
      if (i === n) {
        console.log(-1);
        return;
      }
      dist[v] = dist[u] + w;
    }
  }
}

for (let i = 2; i <= n; i++) {
  console.log(dist[i] === Infinity ? -1 : dist[i]);
}

// 가중치가 음수인게 존재할때 사용하는 벨만 포드 알고리즘
// 모든 간선의 순회를 V번 해야하므로 시간 복잡도는 O(VE)이고 중복 간선이 없는 경우 최대 간선 개수는 V(V-1)개이므로 O(V^3)의 시간복잡도라고 봐도 된다.
// 최단 거리의 특성상 같은 노드를 2번이상 방문하는 것은 허용하지 않는다. 따라서 모든 최단 경로는 최대 V - 1개의 정점을 거친다.
// 그래서 V-1번 만큼 edge들을 순회하는 것인데 만약 V번째에서도 최단 거리가 갱신이 된다는 건 음수 싸이클이 존재한다는 뜻이다.
// 즉, 해당 음수 싸이클을 여러번 거칠수록 최단 거리는 계속해서 짧아지고 결국 모든 최단거리는 음의 무한대로 가게 된다. 이런 경우 최단거리를 구할 수 없다.
