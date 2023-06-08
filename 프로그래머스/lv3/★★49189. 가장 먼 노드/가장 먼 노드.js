class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const ret = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return ret;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(n, edge) {
  let answer = 0;
  const graph = Array(n + 1)
    .fill()
    .map(() => Array(0));
  const dis = Array(n + 1).fill(Infinity);

  for (let [s, v] of edge) {
    graph[v].push(s);
    graph[s].push(v);
  }

  const BFS = (level) => {
    const queue = new Queue();
    queue.enqueue(1);
    dis[0] = 0;
    dis[1] = 0;
    const visited = Array(n + 1).fill(false);
    visited[1] = true;
    let size = 0;

    while (!queue.isEmpty()) {
      size = queue.size();
      for (let i = 0; i < size; i += 1) {
        const cur = queue.dequeue();
        for (let next of graph[cur]) {
          if (!visited[next]) {
            visited[next] = true;
            dis[next] = level + 1;
            queue.enqueue(next);
          }
        }
      }
      level += 1;
    }

    return size;
  };

  return BFS(0);
}

// BFS의 정석 문제
// 여태 queue를 직접 구현 안하고 BFS를 풀었었는데
// 이번에는 queue를 구현해보았다.
