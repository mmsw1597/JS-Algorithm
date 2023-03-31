class MinHeap {
  constructor() {
    this.heap = [null];
  }

  heapify(n, i) {
    let smallest = i;
    let l = i * 2;
    let r = i * 2 + 1;

    if (l <= n && this.heap[i][1] > this.heap[l][1]) smallest = l;
    if (r <= n && this.heap[i][1] > this.heap[r][1]) smallest = r;

    if (smallest !== i) {
      this.swap(i, smallest);
      this.heapify(n, smallest);
    }
  }

  size() {
    return this.heap.length - 1;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  insert(x) {
    this.heap.push(x);
    let i = this.heap.length - 1;
    let parent = Math.floor(i / 2);

    while (i > 1 && this.heap[parent][1] > this.heap[i][1]) {
      this.swap(parent, i);
      i = parent;
      parent = Math.floor(i / 2);
    }
  }

  heapPop() {
    const ret = this.heap[1];
    if (this.heap.length <= 2) {
      this.heap = [null];
      return ret;
    } else {
      this.heap[1] = this.heap.pop();
      this.heapify(this.heap.length - 1, 1);
      return ret;
    }
  }
}

function solution(N, road, K) {
  let answer = 0;
  let graph = Array.from(Array(N + 1), () => Array(0));
  let dist = Array.from({ length: N + 1 }, () => Infinity);
  const minHeap = new MinHeap();
  for (let [a, b, w] of road) {
    graph[a].push([b, w]);
    graph[b].push([a, w]);
  }

  let start = 1;
  dist[start] = 0;
  minHeap.insert([start, 0]);

  while (minHeap.size()) {
    let [v, w] = minHeap.heapPop();
    if (w > dist[v]) continue;

    for (let [sv, sw] of graph[v]) {
      let alt = dist[v] + sw;
      if (alt < dist[sv]) {
        dist[sv] = alt;
        minHeap.insert([sv, dist[sv]]);
      }
    }
  }
  for (let i = 1; i < dist.length; i++) {
    if (dist[i] <= K) answer++;
  }
  return answer;
}

// 우선순위 큐 + 다익스트라
// 다익스트라, 플로이드 워셜 연습은 이 문제로
// 차근차근 이해를 해보자
