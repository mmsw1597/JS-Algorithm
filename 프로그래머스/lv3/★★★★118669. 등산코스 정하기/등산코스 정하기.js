class Node {
  constructor(w, i) {
    this.weight = w;
    this.number = i;
  }
}

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length <= 1 ? 0 : this.heap.length - 1;
  }

  heapify(n, i) {
    let smallest = i;
    let l = i * 2;
    let r = i * 2 + 1;

    if (l <= n && this.heap[l].weight < this.heap[smallest].weight)
      smallest = l;
    if (r <= n && this.heap[r].weight < this.heap[smallest].weight)
      smallest = r;

    if (smallest !== i) {
      this.swap(i, smallest);
      this.heapify(n, smallest);
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  insert(x) {
    this.heap.push(x);
    let i = this.heap.length - 1;
    let parent = Math.floor(i / 2);

    while (i > 1 && this.heap[parent].weight > this.heap[i].weight) {
      this.swap(parent, i);
      i = parent;
      parent = Math.floor(i / 2);
    }
  }

  remove() {
    const ret = this.heap[1];

    if (this.heap.length <= 2) this.heap = [null];
    else {
      this.heap[1] = this.heap.pop();
      this.heapify(this.heap.length - 1, 1);
    }
    return ret;
  }
}

function solution(n, paths, gates, summits) {
  let answer = [];
  let gate = {};
  let summit = {};
  let route = Array.from({ length: n + 1 }, () => []);

  for (let num of gates) {
    gate[num] = true;
  }

  for (let num of summits) {
    summit[num] = true;
  }

  for (let [s, e, w] of paths) {
    route[s].push([e, w]);
    route[e].push([s, w]);
  }
  let max = Infinity;
  let resIndex = Infinity;
  let cur = -1;
  let visit = {};
  const heap = new MinHeap();

  for (let start of gates) {
    visit[start] = true;
    for (let [e, w] of route[start]) {
      heap.insert(new Node(w, e));
    }
  }

  while (cur <= max && heap.size()) {
    let node = heap.remove();
    cur = Math.max(cur, node.weight);

    while (node && summit[node.number]) {
      if (max > cur) {
        max = cur;
        resIndex = node.number;
      } else if (max === cur) {
        resIndex = Math.min(resIndex, node.number);
      }
      node = heap.remove();
      if (node) cur = Math.max(cur, node.weight);
    }

    if (!node) break;

    if (!visit[node.number] && !summit[node.number] && !gate[node.number]) {
      visit[node.number] = true;
      for (let [e, w] of route[node.number]) {
        if (!gate[e] && w <= max) heap.insert(new Node(w, e));
      }
    }
  }

  return [resIndex, max];
}

// 하얗게 불태웠다
// 우선순위 큐를 활용한 문제
// 예외처리 고려할게 많아서 어지러웠던 문제 (출입구는 방문 불가, 산 봉우리는 단 한 개만 방문 가능, heap에서 꺼낸 노드가 null 인 경우)
// 처음에 코드짤때 출입구 마다 heap을 초기화하고 풀었는데 실행시간이 처참했다.
// 이 문제에서 키포인트는 경로를 구하는 문제가 아니고 산봉우리에 도착했을때 최소 비용을 출력하면 되는 문제라는 것
// 물론 한번에 힙에다가 모든 경로를 퍼부으면 안되고 출입구부터 시작해서 이어지는 노드의 edge를 heap에 넣으면 된다.
// 문제에서 약간 함정을 팠는데, 왕복경로를 언급했지만 실제 문제 풀땐 왕복경로는 신경쓰지않고 단지 산봉우리에 도착하는 경로만 생각하면 된다.
// 어짜피 최적의 경로로 따라갔으면 내려가는 길도 그 길로 가야하기 때문
