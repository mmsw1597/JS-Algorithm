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

for (let i = 1; i < input.length; i += 1) {
  const [u, v, w] = input[i];
  edgeList.push(new Node(u, v, w));
}

let start = 1;
dist[start] = 0;
for (let i = 1; i <= n; i += 1) {
  for (let { u, v, w } of edgeList) {
    if (dist[u] !== Infinity && dist[v] > dist[u] + w) {
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
